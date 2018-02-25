import * as React from 'react';
import RatingItem from './RatingItem/RatingItem';
import './BookItem.scss';

export interface BookItemProps {
    cover: string;
    title: string;
    rating: number;
    url?: string;
}

class BookItem extends React.Component<BookItemProps> {

    render() {
        return (
            <div className="book-item">
                {
                    this.props.url ?
                    <a href={this.props.url} target="_blank">
                        <img className="book-cover" src={this.props.cover} alt="Book Cover"/>
                    </a>
                        :
                    <img className="book-cover" src={this.props.cover} alt="Book Cover"/>
                    }
                <div className="book-info-container">
                    <div className="book-title">
                        {this.props.title}
                    </div>
                    <div className="book-rating">
                        <RatingItem rating={this.props.rating}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookItem;