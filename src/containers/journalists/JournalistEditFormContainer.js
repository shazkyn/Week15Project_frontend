import React, {Component} from 'react';

import Request from '../../helpers/request';
import JournalistEditForm from '../../components/journalists/JournalistEditForm'

class JournalistEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = { name: null };
    this.handleCategoryEdit = this.handleJournalistEdit.bind(this);
  }

  handleJournalistEdit(journalist){
    const request = new Request();
    request.patch('/api/journalists/' + this.props.id, journalist).then(() => {
      window.location = '/journalists/' + this.props.id
    })
  }

  render(){
    if(!this.state.journalists || !this.state.category || !this.state.articles){
      return null;
    }
    return <JournalistEditForm journalists = {this.state.journalists} 
    categories={this.state.categories} articles={this.state.articles} 
    handleJournalistEdit= {this.handleJournalistEdit} />

  }
}

export default JournalistEditFormContainer;
