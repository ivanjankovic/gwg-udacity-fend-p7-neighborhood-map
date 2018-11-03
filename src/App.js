import React, { Component } from 'react'
import './App.css'
import SquareAPI from './SquareAPI'
import MapComp from './MapComp'
import Drawer from './Drawer'

const style = {
  inputField: { 
    width: '230px',
    color: 'blue',
    margin: '1.25rem'
  },
  list: {
    padding: 8,
    // background: 'lightgray',
    // width: '30%',
    // maxWidth: 330,
    // width: '100vw',
    // height: '100vh',
    // paddingTop: '1rem',
    // justifyContent: 'space-evenly'
  },
  map: {
    // width: 'auto',
    // height: 'auto',
    margin: 12,
    // marginBottom: 72,
    // marginRight: 270,
    borderRadius: 5,
    // position: 'inherit',
    // display: 'flex',
    // alignItems: 'center',
    // boxSizing: 'inherit',
    // marginLeft: '290px',
  },
  listButton: {
    width: 'auto',
    fontSize: '0.55px',
    padding: 15,
    margin: 12,
    borderRadius: "3.3px",
    background: 'lightgray',
  }
}

class App extends Component {

  state = {
    squareVenues: [],
    mapCenter: {},
    filterdVenues: [],
    allMarkers: [],
    center: {},
    mapLoaded: false,
    dropPins: true,
    zoom: 14,
    selectedPlace: {},
    showingInfoWindow: false,
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
    this.setState({ map })
    setTimeout(() => this.createMarkers(), 2500)
  };

  createMarkers = () => {
    let allMarkers = []
    this.state.filterdVenues.forEach((aVenue) => {
      // console.log(aVenue)
      let marker = new window.google.maps.Marker({
        map: this.state.map,
        name: aVenue.name,
        animation: window.google.maps.Animation.DROP,
        position: { lat: aVenue.location.lat, lng: aVenue.location.lng },
      });
      marker.addListener('click', () => this.onMarkerClick(marker))
      allMarkers.push(marker)
      this.setState({ allMarkers })
      console.log(marker.name)
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
    console.log(marker)
    marker.setAnimation(window.google.maps.Animation.BOUNCE)
    setTimeout(() => marker.setAnimation(null), 2500)
  }

  onListClick = (event) => {
    console.log('list ITEM clicked', event)
    // find matching marker
    let marker = this.state.allMarkers.find(aMarker =>
      aMarker.name === event.target.innerText)
    // update active place
    console.log('matching marker', marker)
    this.onMarkerClick(marker)
  }

  closeInfoWindow = () => this.setState({
    activeMarker: null,
    showingInfoWindow: false
  })

  onQueryChange = (query) => {
    this.clearMarkers()
    this.setState({
      query,
      filterdVenues: this.state.squareVenues.filter(aVenue => aVenue.name.includes(query)),
      dropPins: true,
      showingInfoWindow: false
    },
      () => this.createMarkers()
    )
  }

  render() {
    console.log(this.props.theme)
    return (
      <div className='main'>
        <Drawer 
          state={this.state}
          style={style}
          onListClick={this.onListClick}
          onQueryChange={this.onQueryChange}
          closeInfoWindow={this.closeInfoWindow}
        />
        <MapComp
          state={this.state}
          style={style}
          onMarkerClick={this.onMarkerClick}
          whenMapIsReady={this.whenMapIsReady}
          closeInfoWindow={this.closeInfoWindow}
        />
      </div>
  )
  }
}

export default (App);
