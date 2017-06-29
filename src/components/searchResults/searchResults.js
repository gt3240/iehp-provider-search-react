import React from 'react';
import { connect } from 'react-redux';
import ProviderInfoCard from './providerInfoCard';
import GoogleMapReact from 'google-map-react';
import supercluster from 'points-cluster';
import GMap from '../GMap/GMap';

const Marker = ({ text }) => (
	<div style={{
		position: 'absolute', color: 'white', background: 'red',
		height: 20, width: 30, top: -10, left: -20,
	}}>{text}</div>
);

class SearchResults extends React.Component {
	constructor(props, context) {
		super(props, context);

		//this.onShowCode = this.onShowCode.bind(this);
		console.log('/=====================================');
		console.log('VIEW ----providers', props);
		console.log('/=====================================');

		this.state = {
			center: { lat: 34.08, lng: -117.57 },
			zoom: 13,
		};
	}

	createMapOptions() {
		return {
			minZoomOverride: true,
			minZoom: 2,
		}
	}

	render() {
		return (
			// <div style={{ flex: 1, display: 'flex', height: '600px'}}>
			// 	<GMap />
			// </div>
			<div className="mt-20 p-0">
				{this.props.providersData.providers &&
					this.props.providersData.providers.length > 0 &&
					<div>
						<div className="col-sm-6">
							
							<div style={{ flex: 1, display: 'flex', height: '600px'}} className="mb-20">
								<GMap providers={this.props.providersData.providers}/>
							</div>

							{/*<div style={{ width: '100%', height: '400px' }}>
								<GoogleMapReact
									defaultCenter={this.state.center}
									defaultZoom={this.state.zoom}
									bootstrapURLKeys={{
										key: 'AIzaSyCmId7HsQ6zFuSBSH4iBRT7RZWFlRBSRq4',
										language: 'en',
									}}
									options={this.createMapOptions}
								>
									{this.props.providersData.providers.map((provider, index) =>
										<Marker
											lat={provider.addresses[0].latitude}
											lng={provider.addresses[0].longitude}
											text={provider.firstName + ' ' + provider.lastName}
											key={index}
										/>)
									}
								</GoogleMapReact>
							</div>*/}
						</div>

						<div className="col-sm-6" id="provider-list">
							{this.props.providersData.providers.map((provider, index) =>
								<ProviderInfoCard provider={provider} key={index}></ProviderInfoCard>)
							}
						</div>
					</div>
				}
			</div>
		)
	}
};

function loadClusters(data) {
	console.log('loading clusters', data);
	var points = data.map((provider, index) => {
		console.log('provdier in map ----->', provider);
		var obj = {
			lat: provider.addresses[0].latitude,
			lng: provider.addresses[0].longitude
		}
		return obj;
	});

	console.log('points is', points);
	const cl = supercluster(points);
	const r = cl({ bounds: { nw: { lat: 85, lng: -180 }, se: { lat: -85, lng: 180 } }, zoom: 2 });
	console.log('r is', r);
}


// subscrib to providersData reducer, defined in reducers/index.js
const mapStateToProps = ({ providersData }) => {
	console.log('mapStateToProps data', providersData);
	// if (providersData.providers) {
	// 	loadClusters(providersData.providers);
	// }
	return { providersData };
};

export default connect(mapStateToProps)(SearchResults);