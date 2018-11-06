import React from 'react';

const ArticleForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const article = {
        "name": event.target.name.value,
        "jounalist": event.target.jounalist.value,
        "categories": [...event.target.categories.options].filter((option) => {
          return option.selected
        }).map((option) => {
          return option.value
        })
      }
    props.handleArticlePost(article)

  }



    const journalistOptions = props.jounalists.map((jounalist, index) => {
      return <option key={index} value={jounalist._links.self.href}>{jounalist.name}</option>
    })

    const categoryOptions = props.categories.map((category, index) => {
        return <option key={index} value={category._links.self.href}>{category.location}</option>
      })


      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name="name"/>
            <select name="journalist">
              {journalistOptions}
            </select>
            <select multiple name="categories" >
              {categoryOptions}
            </select>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default ArticleForm;
