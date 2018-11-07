import React, {Component} from 'react';

import Request from '../../helpers/request';
import ArticleForm from '../../components/articles/ArticleForm'

class ArticleFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleArticlePost = this.handleArticlePost.bind(this);
  }

  handleArticlePost(article){
    const request = new Request();
    console.log(article)
    request.post('/api/articles', article).then(() => {
      window.location = '/articles'
    })
  }

  render(){
    return <ArticleForm
      handleArticlePost={this.handleArticlePost} />
  }
}

export default ArticleFormContainer;