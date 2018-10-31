import React, { Component } from 'react'
import Flexbox from 'flexbox-react'
import './App.css'
import MapComp from './MapComp'
import ListComp from './ListComp'
import SquareAPI from './SquareAPI'


class App extends Component {

  state = {
    venues: [],
    markers: [],
    center: {},
    hover: false,
    style: {
      list: {
        background: 'lightgray',
        width: '25%',
        height: '100vh'
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
      limit: 11
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
      this.setState({ venues, center, markers});
      // console.log('venues' , venues, 'center',center, 'markers',markers)
      });
  }
  openInfoWindow = (props, marker) => {
    
    if (!marker) {this.fetchMarker(props)}

    this.setState({
      activeMarker: marker,
      // selectedPlace: props,
      showingInfoWindow: true
    });
  }

  closeInfoWindow = () =>
    this.state.showingInfoWindow &&
    this.setState({
      // activeMarker: null,
      showingInfoWindow: false
    });

  fetchMarker = (props) => {
    console.log('fetching marker')
    console.log(props.target.id)
    console.log(this.state.markers)
  }
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

  listItemClick = (e) => {
    console.log(e);
  }
  render() {
    return (
      <div className="App">
        <Flexbox>
          <ListComp
            state={this.state}
            openInfoWindow={this.openInfoWindow}
            closeInfoWindow={this.closeInfoWindow}
            // onMouseOver={this.onMouseOver}
          />
          <MapComp
            state={this.state}
            openInfoWindow={this.openInfoWindow}
            closeInfoWindow={this.closeInfoWindow}
          />
        </Flexbox>
      </div>
    );
  }
}

export default App;
