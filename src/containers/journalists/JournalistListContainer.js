import React, {Component} from 'react';
import JournalistList from '../../components/journalists/JournalistList.js';

import Request from '../../helpers/request.js';

class JournalistListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {journalists: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/journalists').then((data) => {
      this.setState({journalists: data._embedded.journalists})
    })
    // fetch()
  }

  render(){
    return (
     <JournalistList journalists={this.state.journalists} />
    )
  }
}

export default JournalistListContainer;


