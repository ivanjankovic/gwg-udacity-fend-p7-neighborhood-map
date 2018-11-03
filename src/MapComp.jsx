import React, { Component } from 'react'
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react'


const apiKey = 'AIzaSyDS-ak8ed2Bx4ib-u9-9KCRHdLJVKYKvlY'

export class MapComp extends Component {

  render() {
    const { google, state, style, whenMapIsReady } = this.props;
    
    return (
      
      <Map
        google={google}
        zoom={state.zoom}
        style={style.map}
        onReady={whenMapIsReady}
        // onReady={this.mapReady}
        // onClick={this.props.closeInfoWindow}
        initialCenter={{ lat: 40.745, lng: -73.985 }}
        center={state.mapCenter}
        role='application'
        aria-label='map'
      >
        {console.log('RENDERING MAP')}
        
        <InfoWindow
          marker={state.selectedPlace}
          // onClose={this.props.closeInfoWindow}
          visible={state.showingInfoWindow}>
          <div>
            <h4>{state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      
      </Map>

    );
  }
}

export default GoogleApiWrapper({ apiKey })(MapComp)