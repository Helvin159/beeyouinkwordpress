import React, { Fragment, useContext } from 'react'
import { PageContext } from '../lib/PageContext'
import PortfolioGallery from '../components/PortfolioGallery'
import SingleHero from '../components/SingleHero'

const Portfolio = () => {
	const { pageData } = useContext(PageContext)
	const { data } = pageData

	return (
		<Fragment>
			<SingleHero
				title='My Artwork'
				subTitle={null}
				background={data.tattoo_work[0].image}
			/>
			<div className='portfolio py-5'>
				<PortfolioGallery props={data.tattoo_work} />
			</div>
		</Fragment>
	)
}

export default Portfolio

