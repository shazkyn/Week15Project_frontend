 import React, {Component} from 'react';
import CategoryList from '../../components/categories/CategoryList.js';

import Request from '../../helpers/request.js';

class CategoryListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {categories: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/categories').then((data) => {
      this.setState({categories: data._embedded.categories})
    })
  }

  render(){
    return (
     <CategoryList categories={this.state.categories} />
    )
  }
}

export default CategoryListContainer;


