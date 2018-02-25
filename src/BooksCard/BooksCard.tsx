import * as React from 'react';
import BookItem, { BookItemProps } from './BookItem/BookItem';
import ExpansionCard from '../General/ExpansionCard/ExpansionCard';
import './BookCard.scss';

interface BooksCardProps {
    expanded: boolean;

    toggleExpand: () => void;
}

const books: BookItemProps[] = [
    {
        cover: process.env.PUBLIC_URL + '/img/the-phoenix-project.jpg',
        title: 'The Phoenix Project',
        rating: 4.5,
        url: 'https://www.goodreads.com/book/show/17255186-the-phoenix-project',
    },
    {
        cover: process.env.PUBLIC_URL + '/img/switch.jpg',
        title: 'Switch',
        rating: 4.0,
        url: 'https://www.goodreads.com/book/show/6570502-switch',
    },
    {
        cover: process.env.PUBLIC_URL + '/img/principles.jpg',
        title: 'Principles',
        rating: 4.0,
        url: 'https://www.goodreads.com/book/show/12935037-principles',
    },
];

class BooksCard extends React.Component<BooksCardProps> {

    render() {
        return (
            <div className="books-card">
                <div className="expand-button" onClick={this.props.toggleExpand}>
                    expand button
                </div>
                {
                    this.props.expanded ?
                    <ExpansionCard
                        title="Books"
                        desc="Just a couple books and my ratings"
                        listOfProps={books}
                        Component={BookItem}
                        toggleExpanded={this.props.toggleExpand}
                    />
                        :
                    books.map((bookItem: BookItemProps, key: number) => {
                        return (
                            <BookItem {...bookItem} key={key}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default BooksCard;