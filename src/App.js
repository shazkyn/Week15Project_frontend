import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.js'

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
          </Switch>
        </React.Fragment>
      </Router>

    );
  }
}

export default App;
