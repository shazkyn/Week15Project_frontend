import React from 'react';

const CategoryForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const category = {
      "name": event.target.name.value
    }
    props.handleCategoryPost(category);
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

export default CategoryForm;
