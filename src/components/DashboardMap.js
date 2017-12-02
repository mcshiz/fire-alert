import React from 'react';
import { Map, TileLayer, Marker, Popup } from '../../node_modules/react-leaflet/'

import '../styles/DashboardMap.css'



class DashboardMap extends React.Component {

    renderFireMarkers = (fire, idx) => {
        let fireLatLng = [fire.lat, fire.lng];
        return (
            <Marker position={fireLatLng} key={idx}>
                <Popup>
                    <span><b>{fire.name}</b></span>
                </Popup>
            </Marker>
        )
    };


    render() {
        const position = [this.props.options.lat, this.props.options.lng];
        let markers = this.props.fires.map(this.renderFireMarkers);


        return (
                <Map center={position} zoom={this.props.options.zoom} scrollWheelZoom={this.props.options.scrollEnabled}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    {markers}
                </Map>
        )
    }
}
export default DashboardMap;