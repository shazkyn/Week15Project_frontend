import React, {Component} from 'react';
import Category from '../../components/categories/Category.js';
import CategoryDetails from '../../components/categories/CategoryDetails.js';

import Request from '../../helpers/request.js';

class SingleCategoryContainer extends Component {
  constructor(props){
    super(props);
    this.state = {category: null}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit= this.handleEdit.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/api/categories/' + this.props.id + '?projection=embedJournalist';
    request.get(url).then((data) => {
      this.setState({category: data})
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/api/categories/' + id;
    request.delete(url).then(() => {
      window.location = '/categories'
    })
  }

  handleEdit(id){
    window.location = '/categories/edit/' + id
  }


  render(){
    if(!this.state.category){
      return null;
    }
    return (
      <div className="component">
       <Category category = {this.state.category} />
       <CategoryDetails category = {this.state.category} Articles={this.state.category.articles} handleDelete = {this.handleDelete} handleEdit={this.handleEdit}/>
     </div>
    )

  }
}

export default SingleCategoryContainer;
