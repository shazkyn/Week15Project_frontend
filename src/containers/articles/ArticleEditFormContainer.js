import React, {Component} from 'react';

import Request from '../../helpers/request';
import ArticleEditForm from '../../components/articles/ArticleEditForm'

class ArticleEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {article: null, categories: null};
    this.handleArticleEdit = this.handleArticleEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/articles/" + this.props.id + "?projection=embedArticle")
      .then((article) => {
        this.setState({ article: article })
      });
    request.get("/api/categories/?projection=embedCategory")
      .then((data) => {
        this.setState({ categories: data._embedded.categories })
      });
  }

  handleArticleEdit(article){
    const request = new Request();
    request.patch('/api/articles/' + this.props.id, article).then(() => {
      //window.location = '/articles/' + this.props.id
    })
  }

  render(){
    if(this.state.article === null || this.state.categories === null){
      return null;
    } 

    const article = this.state.article;
      return <ArticleEditForm 
        title={article.title}
        content={article.content}
        date={article.date}
        categoryId={article.category.id}
        journalistId={article.journalist.id}
        categories={this.state.categories}
        handleArticleEdit={this.handleArticleEdit} />
  }
}

export default ArticleEditFormContainer;
