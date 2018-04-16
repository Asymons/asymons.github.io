import * as React from 'react';
import './ExpandButton.scss';
import { FlatButton } from 'material-ui';

interface ExpandButtonProps {
    toggleExpand: () => void;
}

const ExpandButton = (props: ExpandButtonProps) =>
    (
        <div className="expand-button-container">
            <FlatButton
                className="expand-button"
                label="See More"
                onClick={props.toggleExpand}
            />
        </div>
    );

export default ExpandButton;