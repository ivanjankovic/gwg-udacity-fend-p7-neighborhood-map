import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'


const apiKey = 'AIzaSyDS-ak8ed2Bx4ib-u9-9KCRHdLJVKYKvlY'

export class MapComp extends Component {

  state = {
    locations: [
      { lat: 37.77, lng: -122.40, name: '1' },
      { lat: 37.79, lng: -122.41, name: '2' },
      { lat: 37.78, lng: -122.44, name: '3' },
      { lat: 37.76, lng: -122.43, name: '4' }],
    style: {
      width: '70%',
      left: '30%'
    },
    zoom: 14,
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) => {
    console.log(props,marker);
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  }
  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => 
    this.state.showingInfoWindow &&
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={this.state.zoom}
        style={this.state.style}
        onClick={this.onMapClicked}
      >
        {this.state.locations.map((aLocation, idx) => (
          <Marker
            key={idx}
            name={aLocation.name}
            onClick={this.onMarkerClick}
            position={{ lat: aLocation.lat, lng: aLocation.lng }}
            
          />
        ))}
        
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey })(MapComp)