import * as React from 'react';
import PersonalCard from '../PersonalCard/PersonalCard';
import BooksCard from '../BooksCard/BooksCard';
import ProjectsCard from '../ProjectsCard/ProjectsCard';
import './CardsContainer.scss';

interface CardsContainerState {
    // TODO implement better solution for state management
    expandedBooks: boolean;
}

class CardsContainer extends React.Component<any, CardsContainerState> {

    constructor(props: any) {
        super(props);
        this.state = {
            expandedBooks: false
        };

        this._toggleExpandBooks = this._toggleExpandBooks.bind(this);
    }

    _toggleExpandBooks() {
        this.setState({
           expandedBooks: !this.state.expandedBooks,
        });
    }

    render() {
        const cards: JSX.Element[] = [
            <PersonalCard key={0}/>,
            <BooksCard expanded={this.state.expandedBooks} toggleExpand={this._toggleExpandBooks} key={1}/>,
            <ProjectsCard key={2}/>,
        ];

        return(
            <div className="elements-container">
                <div className="left-elements">
                    <div className="card">
                        {cards[0]}
                    </div>
                    <div className="card">
                        {cards[2]}
                    </div>
                </div>
                <div className="right-elements">
                    <div className="card">
                        {cards[1]}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardsContainer;
