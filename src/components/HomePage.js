import React from 'react';
//import PropTypes from 'prop-types';
import Header from './common/Header';
import SearchBar from './searchBar/searchBar';
import SearchResults from './searchResults/searchResults';
import { Collapse } from 'react-collapse';

class HomePage extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			showSearchBar: false			
		}

		//this.onShowCode = this.onShowCode.bind(this);
	}

	 componentDidMount() {
        this.setState({ showSearchBar: true });
     }

	onShowSearch() {
		//console.log('on show search clicked1', this.state.showSearchBar);
		this.setState({
			showSearchBar: !this.state.showSearchBar
		});
	}

	onSearch(){
		
		console.log('on search -------------------');
	}

	render() {
		return (
			<div>
				<Header showSearchBar={this.onShowSearch.bind(this)} />
				{/*<div className="col-sm-2 p-0" style={leftCol}>
						<SideMenu />
				</div>*/}
				<div className="shadowPanel">

					<Collapse isOpened={this.state.showSearchBar}>

						<SearchBar searchParams={this.state.searchParams} 
								   onSearch={this.onSearch.bind(this)}></SearchBar>
					</Collapse>
				</div>

				<div>
					<SearchResults></SearchResults>
				</div>

			</div>
		);
	}
}

export default HomePage;
