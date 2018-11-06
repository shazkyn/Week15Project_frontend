import React from 'react';
import Article from './Article.js';


const ArticleList = (props) => {
	const articles = props.articles.map((article) => {
		 	return (
				<li key={article.id} className="component-item">
					<div className = "component">
				<Article article={article} />
			</div>
			</li>
		)
		})

	return (
		<ul className="component-list">
	    {articles}
	  </ul>

	)
}
 export default ArticleList;
