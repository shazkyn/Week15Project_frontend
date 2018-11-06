import React from 'react';
import Category from './Category.js';
import { Link } from 'react-router-dom';

const CategoryList = (props) => {
	const categories = props.categories.map((category) => {
		return (
			<li key={category.id} className="component-item">
				<div className = "component">
					<Category category={category} />
				</div>
			</li>
		)
	})

	return (
	<React.Fragment>
	<ul className="component-list">
	    {categories}
	</ul>
	<Link to="/categories/new">New Category</Link>
	</React.Fragment>
	)
}

export default CategoryList;
