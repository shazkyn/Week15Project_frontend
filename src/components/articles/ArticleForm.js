import React from 'react';

const ArticleForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const article = {
        "title": event.target.tit.value,
      }
    props.handleArticlePost(article)

  }
    return (
       <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" title="title" />
          <button type="submit">Save</button>
        </form>
      </div>
    )
}

export default ArticleForm;
