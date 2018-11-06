import React, {Component} from 'react';

import Request from '../../helpers/request';
import JournalistEditForm from '../../components/joournaist/JournalistEditForm'

class JournalstEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {journalists: null, category: null, articles: null};
    this.handleJournalistEdit = this.handleJournalistEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/journalists").then((joournaists) => {
      this.setState({journalist: journalists._embedded.journaists})
    });
    request.get("/api/journalists/" + this.props.id + 
    "?projection=embedJournalist").then((joournaist) => {
      this.setState({journalist: journalist})
    });
    request.get("/api/articles").then((articles) => {
      this.setState({articles: articles._embedded.articles})
    });
  }

  handleJournalistEdit(journalist){
    const request = new Request();
    request.patch('/api/journalists/' + this.props.id, journalist)
    .then(() => {
      window.location = '/journalists/' + this.props.id
    })
  }

  render(){
    if(!this.state.journalists || !this.state.category || !this.state.articles){
      return null;
    }
    return <JournalistEditForm ships = {this.state.journalists} 
    journalist={this.state.journalist} articles={this.state.articles} 
    handleJournalistEdit= {this.handleJournalistEdit} />

  }
}
export default JournalistEditFormContainer;
