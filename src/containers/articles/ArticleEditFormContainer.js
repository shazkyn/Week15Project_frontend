import React, {Component} from 'react';

import Request from '../../helpers/request';
import ArticleEditForm from '../../components/articles/ArticleEditForm'

class ArticleEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {journalists: null, categories: null, articles: null};
    this.handleArticleeEdit = this.handleArticleEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/journalists").then((journalists) => {
      this.setState({journalists: journalists._embedded.journalists})
    });
    request.get("/api/articles/" + this.props.id + "?projection=embedJournalist")
    .then((article) => {
      this.setState({article: article})
    });
    request.get("/api/articles").then((articles) => {
      this.setState({articles: articles._embedded.articles})
    });
  }

  handleArticleEdit(article){
    const request = new Request();
    request.patch('/api/articless/' + this.props.id, article).then(() => {
      window.location = '/articles/' + this.props.id
    })
  }

  render(){
    if(!this.state.journalists || !this.state.articles || !this.state.categories){
      return null;
    }
    return <ArticleEditForm journalists = {this.state.journalists} 
    article={this.state.article} categories={this.state.categories} 
    handleArticleEdit= {this.handleArticleEdit} />

  }
}

export default ArticleEditFormContainer;
