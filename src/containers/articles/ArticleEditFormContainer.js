import React, {Component} from 'react';

import Request from '../../helpers/request';
import ArticleEditForm from '../../components/articles/ArticleEditForm'

class ArticleEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {articles: null};
    this.handleArticleEdit = this.handleArticleEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/articles/" + this.props.id + "?projection=embedArticle")
      .then((articles) => {
        this.setState({ articles: articles })
      });
  }

  handleArticleEdit(article){
    const request = new Request();
    request.patch('/api/articles/' + this.props.id, article).then(() => {
      window.location = '/articles/' + this.props.id
    })
  }

  render(){
    if(this.state.articles === null){
      return null;
    } 
      return <ArticleEditForm article={this.state.articles}
        handleArticleEdit={this.handleArticleEdit} />
  }
}

export default ArticleEditFormContainer;
