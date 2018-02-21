import * as React from 'react';
import LinksBanner from './LinksBanner/LinksBanner';
import './PersonalCard.scss';

class PersonalCard extends React.Component {

    render() {
        return (
            <div className="personal-card">
                <div className="personal-card-left-elements">
                    <img
                        className="profile-picture"
                        src={process.env.PUBLIC_URL + '/img/coffee.jpg'}
                        alt="Profile Picture"
                    />
                </div>
                <div className="personal-card-right-elements">
                    Alessio Symons
                    {
                        <LinksBanner/>
                    }
                </div>
            </div>
        );
    }
}

export default PersonalCard;