import React, { Fragment, useContext } from 'react'
import { PageContext } from '../lib/pageContext'
import PortfolioGallery from '../components/PortfolioGallery'
import SingleHero from '../components/SingleHero'

const Portfolio = () => {
	const { pageData } = useContext(PageContext)
	const { data } = pageData

	return (
		<Fragment>
			<SingleHero title='My Artwork' subTitle={null} background={null} />
			<div className='portfolio'>
				<PortfolioGallery props={data.tattoo_work} />
			</div>
		</Fragment>
	)
}

export default Portfolio

