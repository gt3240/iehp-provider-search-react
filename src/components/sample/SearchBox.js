import React from 'react';
import { connect } from 'react-redux';
import { searchProvider } from '../../actions/providerSearchActions';

const SearchBox = ({providers, onSearchProvider}) => {
    console.log('provdiers are ', providers);
    return (
        <div>
          <input className="input" type="text" placeholder="Provider ID" />
          <br />
          <br />
          <button className="btn btn-primary w150" onClick={ onSearchProvider() }>Search</button>
        </div>
    )
};


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onSearchProvider() {
        //console.log('clicked', searchProvider);
        return () => {
            dispatch(searchProvider());
        }
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);