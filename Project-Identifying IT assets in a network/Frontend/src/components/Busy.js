import React from 'react';
import { CircleLoader } from 'react-spinners';
 
class Busy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
    <div>
      <center><CircleLoader
          color={'#123abc'} 
          loading={this.state.loading}  
          size={100} 
        /></center>
    </div>  
    )
  }
}

export default Busy;