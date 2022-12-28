import React from 'react'

const ArticleArchiveSingle = ({ wpData }) => {
	return (
		<div>
			<h1>{wpData.title}</h1>
			<p>{wpData.article_date}</p>
			<img src={wpData.article_image} alt={wpData.title} />
		</div>
	)
}

export default ArticleArchiveSingle

