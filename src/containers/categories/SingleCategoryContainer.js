import React, {Component} from 'react';
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
    const url = '/api/categories/' + this.props.id + '?projection=embedCategory';
    request.get(url).then((data) => {
      this.setState( {category: data} );
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
   
    return (
      <div className="component">
       <CategoryDetails category={this.state.category} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
     </div>
    )

  }
}

export default SingleCategoryContainer;
