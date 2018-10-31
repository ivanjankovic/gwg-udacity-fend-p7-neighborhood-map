import React, { Component } from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput';

class ListComp extends Component {

  state = {
    query: '',
    filterdVenues: {},
  }
  onQueryChange(value) {
    this.setState({ query: value })
  }

  render() {
    // assign location names to buttons
    return (
      <div style={this.props.state.style.list}>

        <OutlinedInput
          style={{ color: 'blue', margin: '0.75rem' }}
          placeholder='Filter list'
          onChange={event => this.onQueryChange(event.target.value)} />

        {this.props.state.venues.filter(aVenue =>
          aVenue.name.toLowerCase().includes(this.state.query.toLowerCase()))
          .map(aVenue => (
            <button
              key={aVenue.id}
              onClick={this.props.getMarkerProps}
              style={this.props.state.style.listButton}
              // onMouseEnter={this.toggleHover}
              // onMouseLeave={this.toggleHover}
              // onMouseOver={this.props.onMouseOver}
            >
              {aVenue.name}
            </button>
          ))}
      </div>
    );
  }
}

export default ListComp