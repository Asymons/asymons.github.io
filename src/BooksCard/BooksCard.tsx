import * as React from 'react';
import BookItem, { BookItemProps } from './BookItem/BookItem';
import './BookCard.scss';

const books: BookItemProps[] = [
    {
        cover: process.env.PUBLIC_URL + '/img/the-phoenix-project.jpg',
        title: 'The Phoenix Project',
        rating: 4.5,
    },
    {
        cover: process.env.PUBLIC_URL + '/img/switch.jpg',
        title: 'Switch',
        rating: 4.0,
    },
    {
        cover: process.env.PUBLIC_URL + '/img/principles.jpg',
        title: 'Principles',
        rating: 4.0,
    },
];

class BooksCard extends React.Component {

    render() {
        return (
            <div className="books-card">
                {
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