import * as React from 'react';
import './App.scss';
import CardsContainer from './CardsContainer/CardsContainer';
import { MuiThemeProvider } from 'material-ui/styles';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="content-container">
                    <MuiThemeProvider>
                        <CardsContainer/>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

export default App;
