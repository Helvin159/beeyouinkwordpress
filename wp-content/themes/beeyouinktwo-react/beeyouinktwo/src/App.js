import React, { useEffect, useCallback, Fragment, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

// Context
import { PageContext } from './lib/PageContext'
import { ProductContext } from './lib/ProductContext'

// Components
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import ScrollToTop from './lib/ScrollToTop'
import Outlet from './pages/Outlet'
import axios from 'axios'
import TattooArchiveSingle from './pages/TattooArchiveSingle'
import TeamArciveSingle from './pages/TeamArchiveSingle'
import ArticleArchiveSingle from './pages/ArticleArchiveSingle'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Checkout from './pages/Checkout'
// import Faq from './pages/Faq'
// import Pricing from './pages/Pricing'

const App = () => {
	const {
		pageData,
		setPageData,
		allPages,
		setAllPages,
		collagePages,
		setCollagePages,
		featuredPages,
		setFeaturedPages,
	} = useContext(PageContext)
	const { products, setProducts } = useContext(ProductContext)

	const url =
		window.location.hostname === 'localhost'
			? 'http://beeyouink.local'
			: window.location.origin

	const fetchedWPData = useCallback(async () => {
		let reqOne = axios.get(`${url}/wp-json/beeYouInk/v1/mainData`)
		let reqTwo = axios.get(
			`https://beeyouink.mrrymer.tech/wp-json/wc/v3/products?consumer_key=${process.env.REACT_APP_CONSUMER_KEY}&consumer_secret=${process.env.REACT_APP_CONSUMER_SECRET}`
		)
		// let reqThree = axios.get(`${url}/wp-json/v2/posts`)

		await axios
			.all([reqOne, reqTwo])
			.then(
				axios.spread((...responses) => {
					const resOne = responses[0]
					const resTwo = responses[1]

					// All Data
					setPageData(resOne)

					// Pages
					setAllPages(resOne.data.pages.all_pages)
					setFeaturedPages(resOne.data.pages.featured_pages)
					setCollagePages(resOne.data.pages.collage_pages)

					// Products
					setProducts(resTwo.data)
				})
			)
			.catch((e) => {
				console.log(e)
			})
	}, [
		url,
		setPageData,
		setProducts,
		setAllPages,
		setCollagePages,
		setFeaturedPages,
	])

	useEffect(() => {
		fetchedWPData()
	}, [fetchedWPData])

	if (pageData && products) {
		// console.log(allPages)
		return (
			<Fragment>
				<ScrollToTop>
					<Routes>
						<Route path='/' element={<Outlet />}>
							<Route index path='/' element={<Home />} />

							{allPages.map((i, k) =>
								i.page.toLowerCase() === 'home' ? (
									<Route index path={`/${i.slug}`} element={<Home />} key={k} />
								) : i.page.toLowerCase() === 'about' ? (
									<Route
										path={`/${i.page.toLowerCase()}`}
										element={<About />}
										key={k}
									/>
								) : i.page.toLowerCase() === 'portfolio' ? (
									<Route
										path={`/${i.page.toLowerCase()}`}
										element={<Portfolio />}
										key={k}
									/>
								) : i.page.toLowerCase() === 'blog' ? (
									<Route
										path={`/${i.page.toLowerCase()}`}
										element={<Blog />}
										key={k}
									/>
								) : i.page.toLowerCase() === 'shop' ? (
									<Route
										path={`/${i.page.toLowerCase()}`}
										element={<Products data={i} />}
										key={k}
									/>
								) : i.page.toLowerCase() === 'checkout' ? (
									<Route
										path={`/${i.page.toLowerCase()}`}
										element={<Checkout data={i} />}
										key={k}
									/>
								) : (
									<Route
										path={`/${i.page.toLowerCase()}`}
										element={<ContactUs />}
										key={k}
									/>
								)
							)}
							{
								// Team Post Type Single Post
								pageData.data.team.map((i, k) => (
									<Fragment key={k}>
										<Route
											path={`${i.slug}`}
											element={<TeamArciveSingle wpData={i} />}
										/>
										<Route
											path={`portfolio/${i.slug}`}
											element={<TeamArciveSingle wpData={i} />}
										/>
										<Route
											path={`articles/${i.slug}`}
											element={<TeamArciveSingle wpData={i} />}
										/>
									</Fragment>
								))
							}

							{
								// Products
								products.map((i, k) => (
									<Fragment key={k}>
										<Route
											path={`/${i.slug}`}
											element={<SingleProduct product={i} />}
										/>
										<Route
											path={`shop/${i.slug}`}
											element={<SingleProduct product={i} />}
										/>
										<Route
											path={`product/${i.slug}`}
											element={<SingleProduct product={i} />}
										/>
									</Fragment>
								))
							}

							{
								// Tatto Post Type Single Post
								pageData.data.tattoo_work.map((i, k) => (
									<Fragment key={k}>
										<Route
											path={`/${i.slug}`}
											element={<TattooArchiveSingle wpData={i} />}
										/>
										<Route
											path={`portfolio/${i.slug}`}
											element={<TattooArchiveSingle wpData={i} />}
										/>
										<Route
											path={`tattoo_work/${i.slug}`}
											element={<TattooArchiveSingle wpData={i} />}
										/>
									</Fragment>
								))
							}
							{
								// Article Post Type Single Post
								pageData.data.articles.map((i, k) => (
									<Fragment key={k}>
										<Route
											path={`${i.slug}`}
											element={<ArticleArchiveSingle wpData={i} />}
										/>
										<Route
											path={`articles/${i.slug}`}
											element={<ArticleArchiveSingle wpData={i} />}
										/>
									</Fragment>
								))
							}
						</Route>
					</Routes>
				</ScrollToTop>
			</Fragment>
		)
	}
}

export default App

