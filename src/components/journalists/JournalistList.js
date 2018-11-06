import React from 'react';
import Journalist from './Journalist.js';

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
	<ul className="component-list">
	    {journalists}
	</ul>
	)
}

export default JournalistList;
