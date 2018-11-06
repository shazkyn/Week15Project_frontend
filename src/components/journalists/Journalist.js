import React  from 'react';
import {Link} from 'react-router-dom';

const Journalist = (props) => {

  if(!props.journalist){
    return null;
  }

  return (
    <React.Fragment>
        <Link to = {"/api/journalists/" + props.journalist.id} className="name">
          {props.journalist.name}
        </Link>
    </React.Fragment>
  )
}

export default Journalist;

