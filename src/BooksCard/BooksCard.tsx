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

const moreBooks: BookItemProps[] = [
    ...books,
    {
        cover: process.env.PUBLIC_URL + '/img/the-checklist-manifesto.jpg',
        title: 'The Checklist Manifesto',
        rating: 3.0,
        url: 'https://www.goodreads.com/book/show/6667514-the-checklist-manifesto',
    },
    {
        cover: process.env.PUBLIC_URL + '/img/how-to-fail.jpg',
        title: 'How to Fail at Almost Everything',
        rating: 4.0,
        url: 'https://www.goodreads.com/book/show/17859574-how-to-fail-at-almost-everything-and-still-win-big',
    },
    {
        cover: process.env.PUBLIC_URL + '/img/predictably-irrational.jpg',
        title: 'Predictably Irrational',
        rating: 3.5,
        url: 'https://www.goodreads.com/book/show/1713426.Predictably_Irrational',
    },
    {
        cover: process.env.PUBLIC_URL + '/img/rookie-smarts.jpg',
        title: 'Rookie Smarts',
        rating: 3.0,
        url: 'https://www.goodreads.com/book/show/17255186-the-phoenix-project',
    },
    {
        cover: process.env.PUBLIC_URL + '/img/millionaire-teacher.jpg',
        title: 'Millionaire Teacher',
        rating: 4.0,
        url: 'https://www.goodreads.com/book/show/11737840-millionaire-teacher',
    },
    {
        cover: process.env.PUBLIC_URL + '/img/teach-you-to-be-rich.jpg',
        title: 'I Will Teach You To Be Rich',
        rating: 4.5,
        url: 'https://www.goodreads.com/book/show/4924862-i-will-teach-you-to-be-rich',
    },
    {
        cover: process.env.PUBLIC_URL + '/img/win-friends-influence-people.jpg',
        title: 'How to Win Friends and Influence People',
        rating: 5.0,
        url: 'https://www.goodreads.com/book/show/4865.How_to_Win_Friends_and_Influence_People',
    },
];

class BooksCard extends React.Component<BooksCardProps> {

    render() {
        return (
            <div className="books-card">
                <div className="expand-button" onClick={this.props.toggleExpand}>
                    See More
                </div>
                {
                    this.props.expanded ?
                    <ExpansionCard
                        title="Books"
                        desc="Just a couple books and my ratings"
                        listOfProps={moreBooks}
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