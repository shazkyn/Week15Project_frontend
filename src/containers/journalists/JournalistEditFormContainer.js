import React, {Component} from 'react';

import Request from '../../helpers/request';
import JournalistEditForm from '../../components/journalists/JournalistEditForm'

class JournalistEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = { journalist: null };
    this.handleJournalistEdit = this.handleJournalistEdit.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get("/api/journalists/" + this.props.id + "?projection=embedJournalist")
      .then((journalist) => {
        this.setState({ journalist: journalist })
      });
  }

  handleJournalistEdit(journalist){
    const request = new Request();
    request.patch('/api/journalists/' + this.props.id, journalist).then(() => {
      window.location = '/journalists/' + this.props.id
    })
  }

  render(){
    if(this.state.journalist === null){
      return null;
    }
    return <JournalistEditForm journalist = {this.state.journalist} 
    handleJournalistEdit= {this.handleJournalistEdit} />

  }
}

export default JournalistEditFormContainer;
