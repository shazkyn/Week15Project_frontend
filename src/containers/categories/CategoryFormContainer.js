import React, {Component} from 'react';

import Request from '../../helpers/request';
import CategoryForm from '../../components/categories/CategoryForm'

class CategoryFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleCategoryPost = this.handleCategoryPost.bind(this);
  }

  handleCategoryPost(category){
    const request = new Request();
    request.post('/api/categories', category).then(() => {
      window.location = '/categories'
    })
  }

  render(){
    return <CategoryForm handleCategoryPost={this.handleCategoryPost} />
  }
}

export default CategoryFormContainer;