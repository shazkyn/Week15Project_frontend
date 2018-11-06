import React, {Component} from 'react';
import Article from '../../components/articles/Article.js';
import ArticleDetails from '../../components/articles/ArticleDetails.js';

import Request from '../../helpers/request.js';

class SingleArticleContainer extends Component {
  constructor(props){
    super(props);
    this.state = {article: null}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit= this.handleEdit.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/api/articles/' + this.props.id + '?projection=embedJournalist';
    request.get(url).then((data) => {
      this.setState({article: data})
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/api/articles/' + id;
    request.delete(url).then(() => {
      window.location = '/articles'
    })
  }

  handleEdit(id){
    window.location = '/articles/edit/' + id
  }


  render(){
    if(!this.state.article){
      return null;
    }
    return (
      <div className="component">
       <Article article = {this.state.article} />
       <articleDetails article = {this.state.article} 
       category={this.state.article.categories} 
       handleDelete = {this.handleDelete} 
       handleEdit={this.handleEdit}/>
     </div>
    )

  }
}

export default SingleArticleContainer;
