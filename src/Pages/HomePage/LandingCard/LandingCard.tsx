import * as React from 'react';
import Snackbar from 'material-ui/Snackbar';
import * as copy from 'copy-to-clipboard';
import './LandingCard.scss';

const snackBarProps = {
    autoHideDuration: 3000,
    email: 'alessiosymons@gmail.com',
};

const messages = {
    landingMessage: 'DEVELOPER.',
    contact: 'CONTACT',
    resume: 'RESUME',
    snackbarMessage: `Copied my email ${snackBarProps.email} to your clipboard!`,
};

interface LandingCardState {
    showSnackBar: boolean;
}

class LandingCard extends React.Component<any, LandingCardState> {

    constructor(props: any) {
        super(props);
        this.state = {
            showSnackBar: false,
        };
    }

    showSnackBar = () => {
        this.setState({
            showSnackBar: true,
        });
        copy(snackBarProps.email);
    }

    hideSnackBar = () => {
        this.setState({
           showSnackBar: false,
        });
    }

    render() {
        return (
            <div className="landing-card">
                <div className="title">
                    {messages.landingMessage}
                </div>
                <div className="links">
                    <div className="contact link" onClick={this.showSnackBar}>
                        {messages.contact}
                    </div>
                    <a className="link" href="../assets/AlessioSymonsWebResume.pdf" download={true}>
                        <div className="resume">
                            {messages.resume}
                        </div>
                    </a>
                </div>
                <Snackbar
                    autoHideDuration={snackBarProps.autoHideDuration}
                    message={messages.snackbarMessage}
                    open={this.state.showSnackBar}
                    onRequestClose={this.hideSnackBar}
                />
            </div>
        );
    }
}

export default LandingCard;