import React, {Component} from 'react';

class CategoryEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.category.name
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const category = {
        "name": this.state.name
    }
    this.props.handleCategoryEdit(category);
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value = {this.state.name} 
        name="name" onChange={e => this.setState({ name: e.target.value })}/>
        <button type="submit">Save</button>
      </form>
    </div>
    )
  }
}

export default CategoryEditForm;
