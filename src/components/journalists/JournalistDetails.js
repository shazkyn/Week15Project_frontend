import React  from 'react';

const JournalistDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.journalist.id);
  }

  const onEdit = () => {
    props.handleEdit(props.journalist.id)
  }

  if(!props.journalist === null){
    return null;
  }

  return (
    <React.Fragment>
    Journalist Name: {props.journalist.name}
    <button onClick={onDelete}>Delete Journalist</button>
    <button onClick={onEdit}>Edit Journalist</button>
    </React.Fragment>
  )
}

export default JournalistDetails;
