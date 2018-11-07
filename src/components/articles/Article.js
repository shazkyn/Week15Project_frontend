import React  from 'react';
import {Link} from 'react-router-dom';

const Article = (props) => {

  if(!props.article){
    return null;
  }

  return (
    <React.Fragment>
       <div>Date: {props.article.date}</div>
        <Link to = {"/articles/" + props.article.id} 
        className="title">
          {props.article.title} 
        </Link>

    </React.Fragment>
  )
}

export default Article;
