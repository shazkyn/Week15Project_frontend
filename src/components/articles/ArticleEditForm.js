import React, {Component} from 'react';

class ArticleEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.article.title
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleSubmit(event){
    event.preventDefault();
    const article = {
        "title": this.state.title,
      }
    this.props.handleArticleEdit(article)
  }


render(){
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title}
          title="title" onChange={e => this.setState({ title: e.target.value })} />
        <button type="submit">Save</button>
      </form>
    </div>

    )
  }
}

  export default ArticleEditForm;
