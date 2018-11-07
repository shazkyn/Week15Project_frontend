import React from 'react';
import Article from './Article.js';
import { Link } from 'react-router-dom';


const ArticleList = (props) => {
	const articles = props.articles.map((article, index) => {
		 	return (
				<li key={index} className="component-item">
					<div className = "component">
				<Article article={article} />
			</div>
			</li>
		)
		})

	return (
		<React.Fragment>
			<ul className="component-list">
				{articles}
			</ul>
			<Link to="/articles/new">New Article</Link>
		</React.Fragment>
	)
}
 export default ArticleList;
