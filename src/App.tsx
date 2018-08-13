import * as React from 'react';
import './App.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './Pages/HomePage/HomePage';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="content-container">
                    <MuiThemeProvider>
                        <HomePage/>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

export default App;
