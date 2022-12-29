import React from 'react'

const ArticleArchiveSingle = ({ wpData }) => {
	if (wpData) {
		const authorName = wpData.author_first_name + ' ' + wpData.author_last_name

		return (
			<div className='max-w-1024 mx-auto text-center'>
				<div className='max-w-920 mx-auto'>
					<h1>Curated Articles for You!</h1>
				</div>
				<div className='py-5 max-w-860 mx-auto' tabIndex={0}>
					<h1 tabIndex={0}>{wpData.title}</h1>
					<p tabIndex={0}>{wpData.article_date}</p>

					{wpData.show_img_in_article && wpData.article_image && (
						<img
							className='img-fluid max-w-360 '
							tabIndex={0}
							src={wpData.article_image}
							alt={wpData.title}
						/>
					)}

					<div
						className='py-4 mx-auto max-w-760'
						tabIndex={0}
						dangerouslySetInnerHTML={{ __html: wpData.content }}
					/>

					<div className='py-3 text-right' tabIndex={0}>
						<p tabIndex={0}>
							By{' '}
							{wpData.custom_author !== null
								? wpData.custom_author
								: wpData.author_first_name !== ''
								? authorName
								: wpData.author}
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default ArticleArchiveSingle

