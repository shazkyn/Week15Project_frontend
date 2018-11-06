import React from 'react';
import Category from './Category.js';

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
	<ul className="component-list">
	    {categories}
	</ul>
	)
}

export default CategoryList;
