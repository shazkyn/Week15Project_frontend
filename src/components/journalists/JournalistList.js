import React from 'react';
import Journalist from './Journalist.js';
import { Link } from 'react-router-dom';

const JournalistList = (props) => {
	const journalists = props.journalists.map((journalist) => {
		return (
			<li key={journalist.id} className="component-item">
				<div className = "component">
					<Journalist journalist={journalist} />
				</div>
			</li>
		)
	})

	return (

		<React.Fragment>
			<ul className="component-list">
				{journalists}
			</ul>
			<Link to="/journalists/new">New Journalist</Link>
		</React.Fragment>
	)
	
}

export default JournalistList;
