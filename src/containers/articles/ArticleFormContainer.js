import React, {Component} from 'react';

import Request from '../../helpers/request';
import ArticleForm from '../../components/articles/ArticleForm'

class ArticleFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {journalists: [], categories: []};
    this.handleArticlePost = this.handleArticlePost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/journalists").then((data) => {
      this.setState({journalists: data._embedded.journalists})
    }).then(() => {
      request.get('/api/categories').then((data) => {
        this.setState({categories: data._embedded.categories})
      });
    });
  }

  handleArticlePost(article, categoryId){
    const request = new Request();
    request.post('/api/articles', article).then(() => {
      window.location = '/articles'
    })

    
  }

  render(){

    return <ArticleForm
      journalists={this.state.journalists}
      categories={this.state.categories}
      handleArticlePost={this.handleArticlePost} 
      
      />

  }
}

export default ArticleFormContainer;