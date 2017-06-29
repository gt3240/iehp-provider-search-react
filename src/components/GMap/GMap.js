import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';
import withHandlers from 'recompose/withHandlers';
import withPropsOnChange from 'recompose/withPropsOnChange';
import GoogleMapReact from 'google-map-react';
import ClusterMarker from './markers/ClusterMarker';
import SimpleMarker from './markers/SimpleMarker';
import supercluster from 'points-cluster';
import { iehpCoords } from './data/fakeData';

export const gMap = ({
  style, hoverDistance, options,
	mapProps: { center, zoom },
	onChange, onChildMouseEnter, onChildMouseLeave,
	clusters,
}) => (
		<GoogleMapReact
			style={style}
			options={options}
			hoverDistance={hoverDistance}
			center={center}
			zoom={zoom}
			onChange={onChange}
			onChildMouseEnter={onChildMouseEnter}
			onChildMouseLeave={onChildMouseLeave}
		>
			{
				clusters
					.map(({ ...markerProps, id, numPoints }) => (
						numPoints === 1
							? <SimpleMarker key={id} {...markerProps} />
							: <ClusterMarker key={id} {...markerProps} />
					))
			}
		</GoogleMapReact>
	);

export const gMapHOC = compose(
	defaultProps({
		clusterRadius: 60,
		hoverDistance: 30,
		options: {
			minZoom: 3,
			maxZoom: 15,
		},
		style: {
			position: 'relative',
			margin: 0,
			padding: 0,
			flex: 1,
		},
	}),

	withProps(({ providers }) => {
		console.log('propers in compose is', providers);
		return {
			markers: providers.map((item, index) => ({
				id: index,
				lat: item.addresses[0].latitude,
				lng: item.addresses[0].longitude
			}))
		}
	}),
	// withState so you could change markers if you want
	// withState(
	// 	'markers',
	// 	'setMarkers',
	// 	({ providers }) => providers.map((item, index) => ({
	// 		id: index,
	// 		lat: item.addresses[0].latitude,
	// 		lng: item.addresses[0].longitude
	// 	}))
	// ),
	withState(
		'hoveredMarkerId',
		'setHoveredMarkerId',
		-1
	),
	withState(
		'mapProps',
		'setMapProps',
		{
			center: iehpCoords,
			zoom: 10,
		}
	),
	// describe events
	withHandlers({
		onChange: ({ setMapProps }) => ({ center, zoom, bounds }) => {
			setMapProps({ center, zoom, bounds });
		},

		onChildMouseEnter: ({ setHoveredMarkerId }) => (hoverKey, { id }) => {
			setHoveredMarkerId(id);
		},

		onChildMouseLeave: ({ setHoveredMarkerId }) => (/* hoverKey, childProps */) => {
			setHoveredMarkerId(-1);
		},
	}),
	// precalculate clusters if markers data has changed
	withPropsOnChange(
		['markers'],
		({ markers = [], clusterRadius, options: { minZoom, maxZoom } }) => ({
			getCluster: supercluster(
				markers,
				{
					minZoom, // min zoom to generate clusters on
					maxZoom, // max zoom level to cluster the points on
					radius: clusterRadius, // cluster radius in pixels
				}
			),
		})
	),
	// get clusters specific for current bounds and zoom
	withPropsOnChange(
		['mapProps', 'getCluster'],
		({ mapProps, getCluster }) => ({
			clusters: mapProps.bounds
				? getCluster(mapProps)
					.map(({ wx, wy, numPoints, points }) => ({
						lat: wy,
						lng: wx,
						text: numPoints,
						numPoints,
						id: `${numPoints}_${points[0].id}`,
					}))
				: [],
		})
	),
	// set hovered
	withPropsOnChange(
		['clusters', 'hoveredMarkerId'],
		({ clusters, hoveredMarkerId }) => ({
			clusters: clusters
				.map(({ ...cluster, id }) => {
					//console.log('mapping here', id);
					return {
						...cluster,
						hovered: id === hoveredMarkerId,
					}
				}),
		})
	)
);

export default gMapHOC(gMap);
