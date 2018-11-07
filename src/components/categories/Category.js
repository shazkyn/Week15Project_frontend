import React  from 'react';
import {Link} from 'react-router-dom';

const Category = (props) => {

  if(!props.category){
    return null;
  }

  return (
    <React.Fragment>
        <Link to = {"/categories/" + props.category.id} 
        className="name">
          {props.category.name}
        </Link>
    </React.Fragment>
  )
}

export default Category;

