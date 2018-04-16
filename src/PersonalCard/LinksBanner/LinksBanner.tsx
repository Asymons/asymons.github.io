import * as React from 'react';
import { FaLinkedin, FaBook, FaGithub, FaDownload } from 'react-icons/lib/fa';
import { MdEmail, MdStars } from 'react-icons/lib/md';
import './LinksBanner.scss';

interface MediaLink {
    url: string;
    icon: JSX.Element;
}

const mediaLinks: MediaLink[] = [
    {
        url: 'https://github.com/asymons',
        icon: <FaGithub/>,
    },
    {
        url: 'https://www.linkedin.com/in/alessiosymons/',
        icon: <FaLinkedin/>,
    },
    {
        url: 'https://www.goodreads.com/asymons',
        icon: <FaBook/>,
    },
    {
        url: 'mailto:alessiosymons@gmail.com',
        icon: <MdEmail/>,
    },
    {
        url: 'https://devpost.com/alessiosymons',
        icon: <MdStars/>,
    },
    {
        url: 'https://drive.google.com/open?id=1KVQ-Ndyd1JMhJOyJr4ZPrtdHI8BYG0Cs',
        icon: <FaDownload/>,
    },

];

class LinksBanner extends React.Component {

    render() {
        return (
            <div className="links-banner">
                {
                    mediaLinks.map((mediaLink: MediaLink, key: number) => {
                        return(
                        <div key={key} className="links-banner-icon">
                            <a href={mediaLink.url} target="_blank">
                                {mediaLink.icon}
                            </a>
                        </div>
                            );
                        })
                    }
            </div>
        );
    }

}

export default LinksBanner;