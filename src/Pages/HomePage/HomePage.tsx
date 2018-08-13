import * as React from 'react';
import LandingCard from './LandingCard/LandingCard';
import Header from './Header/Header';

class HomePage extends React.Component {
    render() {

        return (
            <div className="home-page">
                <Header/>
                <LandingCard/>
            </div>

        );

    }

}

export default HomePage;