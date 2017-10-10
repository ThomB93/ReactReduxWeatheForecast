import React, {Component} from "react";
//import { GoogleMapLoader, GoogleMap } from "react-google-maps";

/*export default props => {
  return (
    <GoogleMapLoader
      containerElement={<div style={{ height: "100%" }} />}
      googleMapElement={
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat: props.lat, lng: props.lon }}
        />
      }
    />
  );
};*/

class GoogleMap extends Component {
  componentDidMount() {
    //lifecycle hook is called when component is loaded
    new google.maps.Map(this.refs.map, {
      //create embedded google map, pass element to render to and config object
      zoom: 12,
      center: {
        //where to center the map with coords
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    //this.refs.map, can reference to this element elsewhere
    return <div ref="map" />;
  }
}

export default GoogleMap;
