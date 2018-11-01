import React, { Component } from 'react'
import Flexbox from 'flexbox-react'
import './App.css'
import MapComp from './MapComp'
import ListComp from './ListComp'
import SquareAPI from './SquareAPI'


class App extends Component {

  state = {
    venues: [],
    filterdVenues: [],
    markers: [],
    center: {},
    hover: false,
    markerElements: [],
    style: {
      list: {
        background: 'lightgray',
        width: '25%',
        height: '100vh',
        paddingTop: '1rem'
      },
      map: {
        width: '75%'
      },
      listButton: {
        width: '75%',
        fontSize: '0.8rem',
        padding: 10,
        margin: 12,
        borderRadius: "2px",
        cursor: 'pointer',
        background: 'white',
      }
    },
    zoom: 14,
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  componentDidMount() {
    SquareAPI.search({
      near: 'New York, NY',
      query: 'library',
      limit: 5
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true,
          id: venue.id
        };
      });
      this.setState({ venues, filterdVenues: venues, center, markers });
      // console.log('venues' , venues, 'center',center, 'markers',markers)
    });
  }

  // grab all marker elements
  onMarkerMounted = element => {
    this.setState(prevState => ({
      markerElements: [...prevState.markerElements, element]
    }))
  };

  onQueryChange = (query)=> {
    this.setState( {query} )
    this.setState({filterdVenues: this.state.venues.filter(aVenue => aVenue.name.includes(query))
    })
  }

  openInfoWindow = (props, marker) => {
    this.setState({
      activeMarker: marker,
      // selectedPlace: props,
      showingInfoWindow: true
    })
  }

  closeInfoWindow = () =>
    this.state.showingInfoWindow &&
    this.setState({
      // activeMarker: null,
      showingInfoWindow: false
    });

  getMarkerProps = (listProps) => {

    let { marker, props } = this.state.markerElements.find(markerEl =>
      markerEl.marker.name === listProps.target.innerText)

    this.openInfoWindow(props, marker)
  }

  // some function for later developemnt

  // onMouseOver = () => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //       style: {
  //         ...prevState.style,
  //           listButton: {
  //             ...prevState.style.listButton, 
  //               fontSize: '0.9rem',
  //               width: '80%',
  //               background: 'gray',
  //           }
  //       }
  //   }))
  // }

  // toggleHover() {
  //   this.setState({hover: !this.state.hover})
  // }


  render() {

    return (
      <div className="App">
        <Flexbox>
          <ListComp
            state={this.state}
            getMarkerProps={this.getMarkerProps}
            closeInfoWindow={this.closeInfoWindow}
            onQueryChange={this.onQueryChange}
          // onMouseOver={this.onMouseOver}
          />
          <MapComp
            state={this.state}
            openInfoWindow={this.openInfoWindow}
            closeInfoWindow={this.closeInfoWindow}
            onMarkerMounted={this.onMarkerMounted}
          />
        </Flexbox>
      </div>
    );
  }
}

export default App;
