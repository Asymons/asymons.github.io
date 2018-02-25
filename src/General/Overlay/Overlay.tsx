import * as React from 'react';
import './Overlay.scss';

interface OverlayProps {
    dismissOverlay: () => void;
}

const Overlay = (props: OverlayProps) => <div className="overlay" onClick={props.dismissOverlay}/>;

export default Overlay;