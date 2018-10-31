import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'


const apiKey = 'AIzaSyDS-ak8ed2Bx4ib-u9-9KCRHdLJVKYKvlY'

export class MapComp extends Component {
  
  render() {
    
    return (
      
      <Map
        google={this.props.google}
        zoom={this.props.state.zoom}
        style={this.props.state.style.map}
        onClick={this.props.closeInfoWindow}
        center={this.props.state.center}
        role='application'
        aria-label='map'>

        {this.props.state.venues.map(aVenue => (
          <Marker ref={this.props.onMarkerMounted}
            key={aVenue.id}
            name={aVenue.name}
            onClick={this.props.openInfoWindow}
            position={{ lat: aVenue.location.lat, lng: aVenue.location.lng }}/>
        ))}

        <InfoWindow
          marker={this.props.state.activeMarker}
          // onClose={this.props.closeInfoWindow}
          visible={this.props.state.showingInfoWindow}>
          <div>
            <h4>{this.props.state.activeMarker.name}</h4>
          </div>
        </InfoWindow>
        
      </Map>
      
    );
  }
}

export default GoogleApiWrapper({ apiKey })(MapComp)