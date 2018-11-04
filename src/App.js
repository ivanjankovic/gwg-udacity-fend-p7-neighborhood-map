import React, { Component } from 'react'
import './App.css'
import SquareAPI from './SquareAPI'
import MapComp from './MapComp'
import Drawer from './Drawer'

const style = {
  list: {
    padding: 5
  },
  inputField: { 
    width: '233px',
    color: 'blue',
    margin: '1.2rem'
  },
  listButton: {
    width: 'auto',
    padding: 15,
    margin: 12,
    borderRadius: "3.3px",
    background: 'lightgray',
  },
  map: {
    margin: 12,
    borderRadius: 5,
  }
}

class App extends Component {

  state = {
    squareVenues: [],
    filterdVenues: [],
    allMarkers: [],
    zoom: 14,
    center: {},
    mapCenter: {},
    mapLoaded: false,
    dropPins: true,
    selectedPlace: null,
    showingInfoWindow: false
  }

  componentDidMount() {
    SquareAPI.search({
      near: 'New York, NY',
      query: 'library',
      limit: 10
    }).then(results => {
      this.setState({
        squareVenues: results.response.venues,
        filterdVenues: results.response.venues,
        mapCenter: results.response.geocode.feature.geometry.center
      })
    })
  }

  whenMapIsReady = (mapProps, map) => {
    console.log('MAP ready')
    this.setState({ map })
    setTimeout(() => this.createMarkers(), 750)
  };

  createMarkers = () => {

    let allMarkers = []
    
    this.state.filterdVenues.forEach((aVenue, idx) => {
    
      window.setTimeout(() => {
        let marker = new window.google.maps.Marker({
          map: this.state.map,
          name: aVenue.name,
          location: aVenue.location,
          animation: this.state.dropPins ? window.google.maps.Animation.DROP: null,
          position: { lat: aVenue.location.lat, lng: aVenue.location.lng },
        })
        marker.addListener('click', () => this.onMarkerClick(marker))
        allMarkers.push(marker)
      }, this.state.dropPins ? idx * 175: idx * 50)

      this.setState({ allMarkers })
    })
  }

  clearMarkers = () => {
    this.state.allMarkers.forEach(marker => marker.setMap(null))
  }

  onMarkerClick = (marker) => {
    this.setState({
      selectedPlace: marker,
      showingInfoWindow: true
    })
    this.handleBounce(marker)
  }

  handleBounce = (marker) => {
    marker.setAnimation(window.google.maps.Animation.BOUNCE)
    setTimeout(() => marker.setAnimation(null), 2500)
  }

  onListClick = (event) => {
    // find matching marker
    let marker = this.state.allMarkers.find(aMarker =>
      aMarker.name === event.target.innerText)
    // update active place
    this.onMarkerClick(marker)
  }

  closeInfoWindow = () => this.setState({
    selectedPlace: null,
    showingInfoWindow: false
  })

  onQueryChange = (query) => {
    this.clearMarkers()
    this.setState({
      query,
      filterdVenues: this.filterVenues(query),
      dropPins: false,
      showingInfoWindow: false
    },
      () => this.createMarkers()
    )
  }

  filterVenues = (query) => {
    return this.state.squareVenues.filter(aVenue => 
      aVenue.name.toLowerCase().includes(query.toLowerCase()))
  }

  render() {

    return (
      <div className='main'>
        <Drawer 
          style={style}
          state={this.state}
          onListClick={this.onListClick}
          onQueryChange={this.onQueryChange}
          closeInfoWindow={this.closeInfoWindow}
        />
        <MapComp
          style={style}
          state={this.state}
          onMarkerClick={this.onMarkerClick}
          whenMapIsReady={this.whenMapIsReady}
          closeInfoWindow={this.closeInfoWindow}
        />
      </div>
  )
  }
}

export default (App);
