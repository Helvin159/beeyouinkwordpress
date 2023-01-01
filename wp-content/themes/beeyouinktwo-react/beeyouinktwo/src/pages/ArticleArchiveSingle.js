import React, { Fragment, useContext } from 'react'
import SingleHero from '../components/SingleHero'
import { PageContext } from '../lib/pageContext'

const ArticleArchiveSingle = ({ wpData }) => {
	const data = useContext(PageContext)

	if (data) {
		const authorName = wpData.author_first_name + ' ' + wpData.author_last_name
		return (
			<Fragment>
				<SingleHero
					title={wpData.title}
					subTitle={wpData.article_date}
					background={wpData.article_image}
				/>
				<div className='max-w-1024 mx-auto text-center article-single'>
					<div className='py-5 max-w-860 mx-auto ' tabIndex={0}>
						{wpData.show_img_in_article && wpData.article_image && (
							<img
								className='img-fluid max-w-360 '
								tabIndex={0}
								src={wpData.article_image}
								alt={wpData.title}
							/>
						)}

						<div
							className='mx-auto max-w-760 article-single__content px-xs-5'
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
			</Fragment>
		)
	}
}

export default ArticleArchiveSingle

