import React, {Component} from 'react';

import Request from '../../helpers/request';
import CategoryForm from '../../components/categories/CategoryForm'

class CategoryFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {journalists: [], articles: []};
    this.handleCategoryPost = this.handleCategoryPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/articles").then((data) => {
      this.setState({journalists: data._embedded.journalists})
    }).then(() => {
      request.get('/api/articles').then((data) => {
        this.setState({articles: data._embedded.articles})
      });
    });
  }

  handleCategoryPost(category, articleId){
    const request = new Request();
    request.post('/api/categories', category).then(() => {
      window.location = '/category'
    })

    
  }

  render(){

    return <CategoryForm
      journalists={this.state.journalists}
      articles={this.state.articles}
      handleCategoryPost={this.handleCategoryPost} 
      
      />

  }
}

export default CategoryFormContainer;