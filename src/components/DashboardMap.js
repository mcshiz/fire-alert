import React from 'react';
import { Map, TileLayer, Marker, Popup } from '../../node_modules/react-leaflet/'
import L from '../../node_modules/leaflet/dist/leaflet'
import esri, {FeatureLayer} from '../../node_modules/esri-leaflet/dist/esri-leaflet'
import './styles/DashboardMap.css'



class DashboardMap extends React.Component {
    constructor(props) {
        super(props);

    }
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
        let listItems = this.props.fires.map(this.renderFireMarkers);


        return (
            <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                <Map center={position} zoom={this.props.options.zoom} scrollWheelZoom={this.props.options.scrollEnabled}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    {listItems}
                </Map>
            </div>
        )
    }
}
export default DashboardMap;