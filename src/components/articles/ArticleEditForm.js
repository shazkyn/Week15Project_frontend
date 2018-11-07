import React, {Component} from 'react';

class ArticleEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: props.categories,
      title: props.title,
      categoryId: props.categoryId,
      journalistId: props.journalistId,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(props.categoryId);
  }

 handleSubmit(event){
    event.preventDefault();
    const article = {
      title: this.state.title,
      category: this.state.categoryId,
      journalistId: this.state.journalistId,
    };
    this.props.handleArticleEdit(article)
  }

  render(){
  const categories = this.state.categories.map(category => {
    return <option key={category.id} value={category._links.self.href}>{category.name}</option>
  })
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
      <select defaultValue={this.state.categoryId}
       onChange={e=>this.setState({categoryId: e.target.value})}
        >{categories}</select>
        <input type="text" value={this.state.title}
          title="title" onChange={e => this.setState({ title: e.target.value })} />
        <button type="submit">Save</button>
      </form>
    </div>

    )
  }
}

  export default ArticleEditForm;
