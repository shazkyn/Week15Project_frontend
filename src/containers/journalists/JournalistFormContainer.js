import React, {Component} from 'react';

import Request from '../../helpers/request';
import JournalistForm from '../../components/journalists/JournalistForm'

class JournalistFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleJournalistPost = this.handleJournalistPost.bind(this);
  }


  handleJournalistPost(journalist){
    const request = new Request();
    request.post('/api/journalists', journalist).then(() => {
      window.location = '/journalists'
    })

    
  }

  render(){

    return <JournalistForm handleJournalistPost={this.handleJournalistPost}/>

  }
}

export default JournalistFormContainer;