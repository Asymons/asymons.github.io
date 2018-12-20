import * as React from 'react';
import './App.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Router, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import BaePage from './Pages/BaePage/BaePage';

const history = createBrowserHistory();

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <div className="content-container">
                    <MuiThemeProvider>
                        <Router history={history}>
                            <Switch>
                                <Route path="/" exact={true} component={() => <HomePage/>}/>
                                <Route path="/bae" exact={true} component={() => <BaePage/>}/>
                            </Switch>
                        </Router>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

export default App;
