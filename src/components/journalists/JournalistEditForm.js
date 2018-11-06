import React, {Component} from 'react';

class JournalistEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.journalist.name
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const journalist = {
        "name": this.state.name
    }
    this.props.handleJournalistEdit(journalist);
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

export default JournalistEditForm;
