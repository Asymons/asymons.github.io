import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import './Header.scss';

const messages = {
    name: 'Alessio Symons',
    linkedin: 'LINKEDIN',
    github: 'GITHUB',
    medium: 'MEDIUM',
};

const links = [
    {
        title: messages.linkedin,
        url: 'https://www.linkedin.com/in/alessiosymons',
    },
    {
        title: messages.github,
        url: 'https://github.com/asymons',
    },
    {
        title: messages.medium,
        url: 'https://medium.com/@alessiosymons',
    },
];

interface HeaderState {
    open: boolean;
}

class Header extends React.Component<any, HeaderState> {

    constructor(props: any) {
        super(props);

        this.state = {
            open: false,
        };
    }

    openDrawer = () => {
        this.setState({
            open: true,
        });
    }

    closeDrawer = () => {
        this.setState({
            open: false,
        });
    }

    locationRender = (location: string = '') => (
        <div className={`${location === '' ? '' : (location + ' ')}header-content`}>
            <div className={`${location === '' ? '' : (location + ' ')}profile`}>
                <img className="profile-img" src="../img/profile-pic.jpg"/>
                <span className="name">
                         {messages.name}
                     </span>
            </div>
            <div className={`${location === '' ? '' : (location + ' ')}links`}>
                {
                    links.map((item: any, key: number) =>
                        <a
                            className={`${location === '' ? '' : (location + ' ')}link`}
                            href={item.url}
                            key={key}
                            target="_blank"
                        >
                                <span className="link" key={key}>
                                    {item.title}
                                </span>
                        </a>
                    )
                }
            </div>
        </div>
    )

    render() {
        const {open} = this.state;
        return (
            <div className="header">
                {this.locationRender('main')}
                <div className="drawer-button">
                    <FontIcon color="white" className="material-icons" onClick={this.openDrawer}>
                        menu
                    </FontIcon>
                </div>

                <Drawer open={open}>
                    <div className="drawer-content">
                        {this.locationRender('drawer')}
                    </div>
                </Drawer>

                <div className="overlay" onClick={this.closeDrawer} style={{display: open ? 'block' : 'none'}}/>

            </div>
        );
    }
}

export default Header;