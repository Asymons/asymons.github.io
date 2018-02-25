import * as React from 'react';
import './ExpandButton.scss';

interface ExpandButtonProps {
    toggleExpand: () => void;
}

const ExpandButton = (props: ExpandButtonProps) =>
    <div className="expand-button" onClick={props.toggleExpand}>See More</div>;

export default ExpandButton;