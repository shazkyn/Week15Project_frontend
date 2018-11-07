import React  from 'react';

const ArticleDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.article.id);
  }

  const onEdit = () => {
    props.handleEdit(props.article.id)
  }

  if(props.article === null){
    return null;
  }

  return (
    <React.Fragment>
    <div>Title: {props.article.title}</div>
      <div>Date: {props.article.date}</div>
      <div>Content: {props.article.content}</div>
      <div>Category: {props.article.category.name}</div>
      <div>Journalist: {props.article.journalist.name}</div>

    <button onClick={onDelete}>Delete Article</button>
    <button onClick={onEdit}>Edit Article</button>
    </React.Fragment>
  )
}

export default ArticleDetails;
