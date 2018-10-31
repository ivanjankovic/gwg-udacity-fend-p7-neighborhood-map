import React, { Component } from 'react'

class ListComp extends Component {

  render() {
    
    return (
      <div style={this.props.state.style.list}>
        {/* assign location names to buttons */}
        {this.props.state.venues.map(aVenue => (
          <button
            // onMouseEnter={this.toggleHover}
            // onMouseLeave={this.toggleHover}
            // onMouseOver={this.props.onMouseOver}
            onClick={this.props.openInfoWindow}
            style={this.props.state.style.listButton}
            id={aVenue.id}
            key={aVenue.id}>
            {aVenue.name}
          </button>
        ))}
      </div>
    );
  }
}

export default ListComp