import React  from 'react';

const ArticleDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.article.id);
  }

  const onEdit = () => {
    props.handleEdit(props.article.id)
  }

  if(!props.article === null){
    return null;
  }
  // Article Title: { props.article.title }

  console.log(props)

  return (
    <React.Fragment>
    <button onClick={onDelete}>Delete Article</button>
    <button onClick={onEdit}>Edit Article</button>
    </React.Fragment>
  )
}

export default ArticleDetails;
