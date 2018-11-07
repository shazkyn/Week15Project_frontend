import React, {Component} from 'react';
import ArticleList from '../../components/articles/ArticleList.js';

import Request from '../../helpers/request.js';

class ArticleListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {articles: [], categories: []}
    this.handleCategorySelected = this.handleCategorySelected.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/categories').then((data) => {
      this.setState({ categories: data._embedded.categories })
    })
    this.handleCategorySelected(-1);
  }

  handleCategorySelected(categoryId) {
    const request = new Request();
    let url = '/api/articles';
    if (categoryId > 0) {
      url = '/api/categories/' + categoryId + "/articles"
    }
    request.get(url).then((data) => {
      const sortedArticles = data._embedded.articles.sort((a, b) => {
        const da = new Date(a.date);
        const db = new Date(b.date);
        if (da === db) return 0;
        if (da < db) return 1;
        return -1;
      });
      this.setState({ articles: sortedArticles })
    })
    console.log(categoryId);
  }

  render(){
    const categories = [{id:-1,name:"All"}].concat(this.state.categories).map(category => {
      return (
        <option key={category.id} value={category.id}>{category.name}</option>
      );
    });
    
    return (
      <React.Fragment>
        <select onChange={e => this.handleCategorySelected(e.target.value)}>
          {categories}
        </select>
       <ArticleList articles={this.state.articles} />
      </React.Fragment>
    )
  }
}

export default ArticleListContainer;
