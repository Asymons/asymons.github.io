import * as React from 'react';
import { MdSearch, MdClose } from 'react-icons/lib/md';
import './SearchBar.scss';
import { FlatButton, TextField } from 'material-ui';

interface SearchBarProps {
    onChange: (textField: string) => void;
}

interface SearchBarState {
    active: boolean;
    searchField: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            active: false,
            searchField: '',
        };

        this._toggleSearchBar = this._toggleSearchBar.bind(this);
        this._updateSearchField = this._updateSearchField.bind(this);
    }

    _toggleSearchBar() {
        this.setState({
            active: !this.state.active,
            searchField: '',
        });
    }

    _updateSearchField(event: any) {
        this.setState({
           searchField: (event.target as HTMLInputElement).value,
        });
        this.props.onChange((event.target as HTMLInputElement).value);
    }

    render() {
     return(
         <div className="search-bar">
             {
                this.state.active ?
                <TextField
                    hintText="Search here"
                    className="input-field"
                    style={{marginLeft: 5, marginRight: 5}}
                    type="text"
                    value={this.state.searchField}
                    onChange={this._updateSearchField}
                />
                    :
                null
             }
                 <FlatButton
                     style={{minWidth: 0, minHeight: 0, lineHeight: 0, height: '100%'}}
                     className="search-bar-icon"
                     onClick={this._toggleSearchBar}
                 >
                     {
                         this.state.active ? <MdClose/> : <MdSearch/>
                     }
                 </FlatButton>
         </div>
     );
    }

}

export default SearchBar;