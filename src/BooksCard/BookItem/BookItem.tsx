import * as React from 'react';
import RatingItem from './RatingItem/RatingItem';
import './BookItem.scss';

export interface BookItemProps {
    cover: string;
    title: string;
    rating: number;
}

class BookItem extends React.Component<BookItemProps> {

    render() {
        return (
            <div className="book-item">
                <img className="book-cover" src={this.props.cover} alt="Book Cover"/>
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