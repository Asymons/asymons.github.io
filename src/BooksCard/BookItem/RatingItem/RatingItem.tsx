import * as React from 'react';
import { MdStar, MdStarHalf } from 'react-icons/lib/md';

interface RatingItemProps {
    rating: number;
}

class RatingItem extends React.Component<RatingItemProps> {

    render() {
        const stars = [];
        for (let i = 0; i < Math.floor(this.props.rating); ++i) {
            stars.push(<MdStar key={i}/>);
        }
        if (Math.floor(this.props.rating) !== this.props.rating) {
            stars.push(<MdStarHalf key={stars.length}/>);
        }
        return (
            <div className="rating">
                {stars}
            </div>
        );
    }

}

export default RatingItem;