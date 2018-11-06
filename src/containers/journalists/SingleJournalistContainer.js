import React, {Component} from 'react';
import Journalist from '../../components/journalists/Journalist.js';
import JournalistDetails from '../../components/journalists/JournalistDetails.js';

import Request from '../../helpers/request.js';

class SingleJournalistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {journalist: null}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit= this.handleEdit.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/api/journalists/' + this.props.id + '?projection=embedJournalist';
    request.get(url).then((data) => {
      this.setState({journalist: data})
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/api/journalists/' + id;
    request.delete(url).then(() => {
      window.location = '/journalists'
    })
  }

  handleEdit(id){
    window.location = '/journalists/edit/' + id
  }


  render(){
    if(!this.state.journalist){
      return null;
    }
    return (
    
      <div className="component">
        <JournalistDetails journalist={this.state.journalist} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
      </div>
    )
    

  }
}

export default SingleJournalistContainer;
