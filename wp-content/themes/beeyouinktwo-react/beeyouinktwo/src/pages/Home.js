import React, { Fragment, useContext } from 'react'
import { PageContext } from '../lib/PageContext'
import Hero from '../components/Hero'
import PageCollage from '../components/PageCollage'
import PortfolioGallery from '../components/PortfolioGallery'
import TestimonialsComponent from '../components/TestimonialsComponent/TestimonialsComponent'
import SectionTitle from '../components/SectionTitle'
import ViewMoreBtn from '../components/ViewMoreBtn'

const Home = () => {
	const { pageData } = useContext(PageContext)
	const { data } = pageData

	return (
		<Fragment>
			<Hero />
			<SectionTitle title='Featured Tattoos' />
			<PortfolioGallery limit={6} props={data.tattoo_work} />
			<ViewMoreBtn slug='/portfolio' />
			<PageCollage />
			<TestimonialsComponent />
		</Fragment>
	)
}

export default Home

