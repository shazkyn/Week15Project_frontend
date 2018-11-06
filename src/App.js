import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.js'

import ArticleListContainer from './containers/articles/ArticleListContainer'

import JournalistListContainer from './containers/journalists/JournalistListContainer'
import SingleJournalistContainer from './containers/journalists/SingleJournalistContainer';
import JournalistFormContainer from './containers/journalists/JournalistFormContainer';
import JournalistEditFormContainer from './containers/journalists/JournalistEditFormContainer';

import CategoryListContainer from './containers/categories/CategoryListContainer'
import SingleCategoryContainer from './containers/categories/SingleCategoryContainer';
import CategoryFormContainer from './containers/categories/CategoryFormContainer';
import CategoryEditFormContainer from './containers/categories/CategoryEditFormContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path='/articles' component={ArticleListContainer} />
          <Switch>
            <Route exact path='/categories' component={CategoryListContainer} />
            <Route exact path='/categories/new' component={CategoryFormContainer} />
            <Route exact path="/categories/edit/:id" render={(props) => {
              const id = props.match.params.id;
              return <CategoryEditFormContainer id={id} />
            }}
            />
            <Route exact path="/categories/:id" render={(props) => {
              const id = props.match.params.id;
              return <SingleCategoryContainer id={id} />
            }}
            />

            <Route exact path='/journalists' component={JournalistListContainer} />
            <Route exact path='/journalists/new' component={JournalistFormContainer} />
            <Route exact path="/journalists/edit/:id" render={(props) => {
              const id = props.match.params.id;
              return <JournalistEditFormContainer id={id} />
            }}
            />
            <Route exact path="/journalists/:id" render={(props) => {
              const id = props.match.params.id;
              return <SingleJournalistContainer id={id} />
            }}
            />
          </Switch>
        </React.Fragment>
      </Router>

    );
  }
}

export default App;
