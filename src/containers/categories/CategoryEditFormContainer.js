import React, {Component} from 'react';

import Request from '../../helpers/request';
import CategoryEditForm from '../../components/categories/CategoryEditForm'

class CategoryEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = { name: null };
    this.handleCategoryEdit = this.handleCategoryEdit.bind(this);
  }

  handlecategoryEdit(category){
    const request = new Request();
    request.patch('/api/categories/' + this.props.id, category).then(() => {
      window.location = '/categories/' + this.props.id
    })
  }

  render(){
    if(!this.state.journalists || !this.state.category || !this.state.articles){
      return null;
    }
    return <CategoryEditForm journalists = {this.state.journalists} category={this.state.category} raids={this.state.raids} handlePirateEdit= {this.handlePirateEdit} />

  }
}

export default CategoryEditFormContainer;
