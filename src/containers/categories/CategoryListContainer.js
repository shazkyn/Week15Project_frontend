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
    request.get('http://localhost:8080/api/categories').then((data) => {
      this.setState({categories: data._embedded.categories})
    })
    // fetch()
  }

  render(){
    return (
     <CategoryList categories={this.state.categories} />
    )
  }
}

export default CategoryListContainer;


