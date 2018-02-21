import * as React from 'react';
import './App.scss';
import PersonalCard from './PersonalCard/PersonalCard';
import BooksCard from './BooksCard/BooksCard';
import ProjectsCard from './ProjectsCard/ProjectsCard';
import { MuiThemeProvider } from 'material-ui/styles';

const cards: JSX.Element[] = [
    <PersonalCard key={0}/>, <BooksCard key={1}/>, <ProjectsCard key={2}/>,
];

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="content-container">
                    <MuiThemeProvider>
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
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

export default App;
