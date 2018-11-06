import React, {Component} from 'react';

import Request from '../../helpers/request';
import JournalistForm from '../../components/journalists/JournalistForm'

class JournalistFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {categories: [], articles: []};
    this.handleJournalistPost = this.handleJournalistPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/categories").then((data) => {
      this.setState({articles: data._embedded.articles})
    }).then(() => {
      request.get('/api/articles').then((data) => {
        this.setState({articles: data._embedded.articles})
      });
    });
  }

  handleJournalistPost(journalist, articleId){
    const request = new Request();
    request.post('/api/journalists', journalist).then(() => {
      window.location = '/journalists'
    })

    
  }

  render(){

    return <JournalistForm
      journalists={this.state.journalists}
      articles={this.state.articles}
      handleJournalistPost={this.handleJournalistPost} 
      
      />

  }
}

export default JournalistFormContainer;