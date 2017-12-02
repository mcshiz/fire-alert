import React from 'react';
import { Map, TileLayer, Marker, Popup } from '../../node_modules/react-leaflet/'

import '../styles/DashboardMap.css'



class DashboardMap extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(fireId) {
        let link = '/fire-details/'+fireId;
        this.props.history.push(link);
    }
    renderFireMarkers = (fire, idx) => {
        let fireLatLng = [fire.lat, fire.lng];
        return (
            <Marker position={fireLatLng} key={idx}>
                <Popup>
                    <div>
                        <span><b>{fire.name}</b></span>
                        <br/>
                        <button className="btn btn-xs btn-primary" onClick={()=> {this.handleClick(fire.id)} }>View Details</button>
                    </div>
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