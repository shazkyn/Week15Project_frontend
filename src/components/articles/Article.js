import React  from 'react';
import {Link} from 'react-router-dom';

const Article = (props) => {

  if(!props.article){
    return null;
  }

  return (
    <React.Fragment>
        <Link to = {"/articles/" + props.article.id} 
        className="title">
          {props.article.title} 
        </Link>

    </React.Fragment>
  )
}

export default Article;
