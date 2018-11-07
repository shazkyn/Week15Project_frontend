import React, {Component} from 'react';
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
    request.get('/api/articles/' + this.props.id + '?projection=embedArticle').then((data) => {
      const article = {
        title: data.title,
        date: data.date,
        id: data.id,
        content: data.content,
        journalistId: data._embedded.journalist.id,
        journalistName: data._embedded.journalist.name,
        categoryId: data._embedded.category.id,
        categoryName: data._embedded.category.name,
      };
      this.setState({article: article})
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
    window.location = '/articles/' + id + '/edit'
  }


  render(){
     return (
      <div className="component">
        <ArticleDetails article={this.state.article} 
        handleDelete={this.handleDelete} 
        handleEdit={this.handleEdit} />
      </div>
    )
  }
}

export default SingleArticleContainer;
