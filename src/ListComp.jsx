import React, { Component } from 'react'

class ListComp extends Component {

  state = {
    
  }

  render() {
    return (
      <div
        style={{
          width: '30%', 
          background: 'gray'
        }}
      >
        <button
          style={{
            width: '50%', 
            fontSize: '0.9rem',
            padding: 10,
            margin: 12,
            borderRadius: "2px"
          }}
        >Hello</button>
      </div>
    );
  }
}

export default ListComp