import React, { Fragment, useContext } from 'react'
import { PageContext } from '../lib/pageContext'
import PortfolioGallery from '../components/PortfolioGallery'

const Portfolio = () => {
	const { pageData } = useContext(PageContext)
	const { data } = pageData

	return (
		<Fragment>
			<div className='portfolio'>
				<div className='max-w-920 portfolio__header mx-auto text-center aligncenter py-5'>
					<h1>My Artwork!</h1>
				</div>
				<PortfolioGallery props={data.tattoo_work} />
			</div>
		</Fragment>
	)
}

export default Portfolio

