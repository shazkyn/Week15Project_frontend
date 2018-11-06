import React  from 'react';

const CategoryDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.category.id);
  }

  const onEdit = () => {
    props.handleEdit(props.category.id)
  }

  if(!props.name){
    return null;
  }

  return (
    <React.Fragment>
    Category Name: {props.name}
    <button onClick={onDelete}>Delete Category</button>
    <button onClick={onEdit}>Edit Category</button>
    </React.Fragment>
  )
}

export default CategoryDetails;
