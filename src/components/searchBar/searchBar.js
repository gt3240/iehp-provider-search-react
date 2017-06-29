import React from 'react';
import { connect } from 'react-redux';
import { searchProvider, setProviderType } from '../../actions/providerSearchActions';

//import {Link, IndexLink} from 'react-router';

class SearchBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log('search bar props', props);
        this.state = {
            providerType: '',
            plan: 'all'
        }

        //this.onSearch = this.onSearch.bind(this);
    }

    onSelectProvider(event) {
        console.log('on select provider ->', event.target.name, event.target.value);
        switch (event.target.name) {
            case 'providerType':
                this.setState({
                    providerType: event.target.value
                });
                break;
            case 'plans':
                this.setState({
                    plan: event.target.value
                });
                break;
        }

    }

    // onSearch() {
    //     console.log('handeling click');
    //     this.props.onSearch(this.state);
    // }

    // onSearch(event) {
    //     event.preventDefault();
    //     console.log('on submit ----------');
    //     console.log('provider type', this.state);
    // }

    render() {
        return (
            <div className="searchBar">
                <form>
                    <div className="row">
                        <div className="col-sm-3 col-sm-offset-1">
                            <label>
                                Search For
                            <select value={this.props.searchParams.providerType}
                                    name="providerType"
                                    onChange={this.props.onSetProvider.bind(this)}>
                                    <option value="" disabled>Select One</option>
                                    <option value="PCP">PCP</option>
                                    <option value="SPEC">Specialist</option>
                                    <option value="HOSP">Hospital</option>
                                    <option value="VSN">Vision Provider</option>
                                </select>
                            </label>
                        </div>

                        <div className="col-sm-3">
                            <label>
                                Plans
                            <select value={this.state.plan}
                                    name="plans"
                                    onChange={this.onSelectProvider.bind(this)}>
                                    <option value="all">All Plans</option>
                                    <option value="cmc">CalMedi Connect</option>
                                    <option value="med">Medi-Cal</option>

                                </select>
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3 col-sm-offset-1">
                            <button type="submit"
                                onClick={this.props.onSearch.bind(this)}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

const mapStateToProps = ({searchParams}) => ({searchParams});

const mapDispatchToProps = dispatch => ({
    onSearch(event) {
        event.preventDefault();
        console.log('on submit dispatch ==============', this.props.searchParams);
        if (this.props.searchParams) {
            let payload = prepPayload(this.props.searchParams);
            dispatch(searchProvider(payload));
        }
    },
    onSetProvider(event){
        console.log('setting provider', event.target.value);
        dispatch(setProviderType(event.target.value));
    }
});

function prepPayload(data) {
    let payload = null;
    console.log('preping payload', data);
    if (data.providerType === 'PCP') {
        payload = { "ProviderType": "PCP", "AcceptingNewMbr": true, "DoctorTypes": "Family Practice,OB/GYN,Pediatrics,Internal Medicine,General Practice" }
    }

    if (data.providerType === 'SPEC') {
        payload = { "ProviderType": "SPEC" }
    }

    if (data.providerType === 'HOSP') {
        payload = { "ProviderType": "HOSP", "SortBy": "organizationName" }
    }

    if (data.providerType === 'VSN') {
        payload = { "ProviderType": "VSN" }
    }

    return payload;
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);