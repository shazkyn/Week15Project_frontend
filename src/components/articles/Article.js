import React  from 'react';
import {Link} from 'react-router-dom';

const Article = (props) => {

  if(!props.article){
    return null;
  }

console.log(props.article)

  return (
    <React.Fragment>
        <Link to = {"/articles/" + props.article.id} className="name">
          {props.article.name} 
        </Link>
      {/* <p>Journalist: {props.article.journalist.name}</p> */}

    </React.Fragment>
  )
}

export default Article;
