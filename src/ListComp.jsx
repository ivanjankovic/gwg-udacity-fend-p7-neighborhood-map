import React, { Component } from 'react'

class ListComp extends Component {

  render() {
    // assign location names to buttons
    return (
      <div style={this.props.state.style.list}>
        {this.props.state.venues.map(aVenue => (
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