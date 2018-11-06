import React, {Component} from 'react';

import Request from '../../helpers/request';
import CategoryEditForm from '../../components/categories/CategoryEditForm'

class CategoryEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = { category: null };
    this.handleCategoryEdit = this.handleCategoryEdit.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get("/api/categories/" + this.props.id + "?projection=embedCategory")
      .then((category) => {
        this.setState({ category: category })
      });
  }

  handleCategoryEdit(category){
    const request = new Request();
    request.patch('/api/categories/' + this.props.id, category).then(() => {
      window.location = '/categories/' + this.props.id
    })
  }

  render(){
    if (this.state.category === null) {
      return null;
    }
    return <CategoryEditForm category={this.state.category} handleCategoryEdit={this.handleCategoryEdit} />
  }
}

export default CategoryEditFormContainer;
