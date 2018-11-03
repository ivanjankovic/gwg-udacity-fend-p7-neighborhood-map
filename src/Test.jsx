import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import React from 'react';

class Test extends React.Component {
  render () {
    if (isWidthUp('sm', this.props.width)) {
      return <div>test</div>
    }
    {console.log(this.props)}
    return <div style={{backgroundColor: 'red', height: '55px'}}>test rkflklwk</div>
  }
}

export default withWidth()(Test);