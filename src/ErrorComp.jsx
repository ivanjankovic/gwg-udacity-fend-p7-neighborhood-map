import React, { Component } from 'react'

export class ErrorComp extends Component {

  render() {
    
    return (
      <div className='error' style={{ 
        backgroundColor: 'lightgray',
        position: 'absolute',
        margin: 12,
        borderRadius: 5,
        padding: 45,
      }}>
        <h4 style={{ 
          color: 'white',
          fontSize: '1.25rem',
          textAlign: 'center'
        }}
        >We Are Unable to Process Your Request At This Time</h4>
      </div>
    )
  }
}

export default ErrorComp