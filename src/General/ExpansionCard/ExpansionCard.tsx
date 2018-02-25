import * as React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { MdClose } from 'react-icons/lib/md';
import './ExpansionCard.scss';
import Overlay from '../Overlay/Overlay';

// list should be defined as props for component... is this a trap?

interface ExpansionCardProps {
    title: string;
    desc: string;
    listOfProps: object[];
    Component: any;

    toggleExpanded: () => void;
}

interface ExpansionCardState {
    list: JSX.Element[];
}

class ExpansionCard extends React.Component<ExpansionCardProps, ExpansionCardState> {

    constructor(props: ExpansionCardProps) {
        super(props);
        this.state = {
            list: this.props.listOfProps.map((listProps: object, key: number) => {
                return (React.createElement(this.props.Component, Object.assign(listProps, {key: key})));
            }),
        };

        this._searchFilter = this._searchFilter.bind(this);
    }

    _searchFilter(text: string) {
        const filteredProps: object[] = this.props.listOfProps.filter((listProps: object) => {
            return Object.keys(listProps).reduce(
                (acc: string, key: string) => {
                    return acc || ((listProps[key] as string !== undefined) &&
                        (listProps[key].toString().toLowerCase().indexOf(text.toLowerCase()) >= 0));
                },
                false);
        });

        this.setState({
            list: filteredProps.map((listProps: object, key: number) => {
                return (React.createElement(this.props.Component, Object.assign(listProps, {key: key})));
            }),
        });
    }

    render() {
        return (
            <div className="expansion-card-container">
                <Overlay dismissOverlay={this.props.toggleExpanded}/>
                <div className="expansion-card">
                    <div className="expansion-card-header">
                        {this.props.title}
                        <div className="close-button" onClick={this.props.toggleExpanded}>
                            <MdClose/>
                        </div>
                    </div>

                    <div className="expansion-card-sub">
                        {this.props.desc}
                        <SearchBar onChange={this._searchFilter}/>
                    </div>
                    <div className="expansion-card-content">
                        {this.state.list}
                    </div>
                </div>
            </div>
        );
    }

}

export default ExpansionCard;