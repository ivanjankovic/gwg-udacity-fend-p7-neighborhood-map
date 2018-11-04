import React, { Component } from 'react'
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import handleAE from './ErrorComp'


const apiKey = 'AIzaSyDS-ak8ed2Bx4ib-u9-9KCRHdLJVKYKvlY'

export class MapComp extends Component {

  render() {
    const { google, state, style, whenMapIsReady, closeInfoWindow } = this.props
    const venue = state.selectedPlace
    
    return (
      
      <Map
        aria-label='map'
        role='application'
        visible={state.mapVisible}
        google={google}
        style={style.map}
        zoom={state.zoom}
        center={state.mapCenter}
        onReady={whenMapIsReady}
        onClick={closeInfoWindow}
        initialCenter={{ lat: 40.745, lng: -73.985 }}
      > 
        <InfoWindow
          visible={state.showingInfoWindow}
          marker={state.selectedPlace}
          onClose={closeInfoWindow}
        >
          <div>
              <h4>{venue && venue.name}</h4>
              <h4>{venue && venue.location.address}</h4>
          </div>
        </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey, LoadingContainer: handleAE})(MapComp)