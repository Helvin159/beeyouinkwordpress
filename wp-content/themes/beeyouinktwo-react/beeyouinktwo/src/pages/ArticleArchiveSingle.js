import React from 'react'

const ArticleArchiveSingle = ({ wpData }) => {
	return (
		<div className='max-w-1024 mx-auto text-center'>
			<div className='py-5 max-w-860 mx-auto'>
				<h1>{wpData.title}</h1>
				<p>{wpData.article_date}</p>
				<div
					className=' mx-auto'
					dangerouslySetInnerHTML={{ __html: wpData.content }}
				/>
				<img
					className='img-fluid'
					src={wpData.article_image}
					alt={wpData.title}
				/>

				<div className='py-3 text-right'>
					<p>By {wpData.author_first_name + ' ' + wpData.author_last_name} </p>
				</div>
			</div>
		</div>
	)
}

export default ArticleArchiveSingle

