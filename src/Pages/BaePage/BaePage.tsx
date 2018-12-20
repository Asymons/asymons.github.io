import * as React from 'react';
import './BaePage.scss';

const baePics = [
    'bae-ellie.PNG',
    'bae-1.PNG',
    'bae-2.PNG',
    'bae-3.PNG',
    'bae-orlando.PNG',
];

const christmasMusic = require('../../assets/all-i-want-for-christmas.mp3');

const numberOfSnow = 40;

class BaePage extends React.Component {
    render() {

        const snowElements = [];
        for (let i = 0; i < numberOfSnow; ++i) {
            snowElements.push(
                <div className="snowflake">
                    ❅
                </div>);
        }

        const message =
            'Love you lots! I hope you enjoy the music choice 😉. ' +
            'Don\'t eat all of Santa\'s cookies. ' +
            'Make sure the cookies you share with Ellie don\'t have 🍫\n';

        return (
            <div className="bae-page">
                {snowElements}
                <div className="title">
                    𝔐𝔢𝔯𝔯𝔶 ℭ𝔥𝔯𝔦𝔰𝔱𝔪𝔞𝔰 𝔄𝔩𝔢𝔵𝔞𝔫𝔡𝔯𝔦𝔞
                </div>
                <div className="message">
                    {message}
                </div>
                <div className="collage">
                    {
                        baePics.map((baePicLocation) => (
                            <img
                                style={{
                                    width: 250,
                                    height: 250,
                                    margin: 10,
                                    borderRadius: 8,
                                }}
                                src={require(`../../assets/${baePicLocation}`)}
                            />
                        ))
                    }
                </div>
                <audio src={christmasMusic} controls={true} autoPlay={true}/>
            </div>
        );

    }

}

export default BaePage;
