import React, {Component} from 'react';

class ArticleEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.article.name,
      jounalist: props.article.jounalist,
      category: props.article.category,
      raidOptions: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleSubmit(event){
    event.preventDefault();
    const article = {
        "name": this.state.name,
        "jounalist": this.state.jounalist,
        "categories": [...this.state.categoryOptions].filter((option) => {
          return option.selected
        }).map((option) => {
          return option.value
        })
      }
    this.props.handleArticleEdit(article)
  }


render(){

     const jounalistOptions = this.props.jounalists.map((jounalist, index) => {
      return <option key={index} value={jounalist._links.self.href}>
      {jounalist.name}</option>
    })

    const categoryOptions = this.props.categories.map((category, index) => {
      return <option key={index} value={category._links.self.href}>
      {category.name}</option>
    })


  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value = {this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })}/>
        <input type="text" value = {this.state.larticle} name="article" onChange={e => this.setState({ article: e.target.value })}/>
        {/* <input type="number" value = {this.state.age} name="age" onChange={e => this.setState({ age: e.target.value })}/> */}
        <select name="ship" onChange={e => this.setState({ jounalist: e.target.value })}>
          {jounalistOptions}
        </select>
        <select multiple name="categories" onChange={e => this.setState({categoryOptions: e.target.options})} >
          {categoryOptions}
        </select>
        <button type="submit">Save</button>
      </form>
    </div>

)
}
  }

  export default ArticleEditForm;
