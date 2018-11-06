import React  from 'react';
import {Link} from 'react-router-dom';

const ArticleDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.article.id);
  }

  const onEdit = () => {
    props.handleEdit(props.article.id)
  }

  if(!props.categories){
    return null;
  }
  const categories = props.categories.map((category, index) => {
    return <li key = {index}>{category.location}</li>
  })

  return (
    <React.Fragment>
    Categories:
    <ul>
      {categories}
    </ul>
    <button onClick={onDelete}>Delete Article</button>
    <button onClick={onEdit}>Edit Article</button>
    </React.Fragment>
  )
}

export default ArticleDetails;
