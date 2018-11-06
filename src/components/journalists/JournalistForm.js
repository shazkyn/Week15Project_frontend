import React from 'react';

const JournalistForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const journalist = {
      "name": event.target.name.value
    }
    props.handleJournalistPost(journalist);
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" name="name"/>
      <button type="submit">Save</button>
    </form>
  </div>
  )
}

export default JournalistForm;
