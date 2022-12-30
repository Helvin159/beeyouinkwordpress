import React, { useEffect, useCallback, Fragment, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageContext } from './lib/pageContext'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import ContactUs from './pages/ContactUs'
// import Pricing from './pages/Pricing'
// import Faq from './pages/Faq'
import Blog from './pages/Blog'
import ScrollToTop from './lib/ScrollToTop'
import Outlet from './pages/Outlet'
import axios from 'axios'
import TattooArchiveSingle from './pages/TattooArchiveSingle'
import TeamArciveSingle from './pages/TeamArchiveSingle'
import ArticleArchiveSingle from './pages/ArticleArchiveSingle'
import { ProductContext } from './lib/productContext'

const App = () => {
	const { pageData, setPageData } = useContext(PageContext)
	const { products, setProducts } = useContext(ProductContext)

	const url =
		window.location.hostname === 'localhost'
			? 'http://beeyouink.local'
			: window.location.origin

	const fetchedWPData = useCallback(async () => {
		await axios
			.get(`${url}/wp-json/beeYouInk/v1/mainData`, {
				headers: {
					'Content-Type': 'application/json',
				},
				url: `${url}/wp-json/beeYouInk/v1/mainData`,
			})
			.then((res) => {
				// console.log(first)
				setPageData(res)
			})
			.catch((e) => {
				console.log(e)
			})

		await axios
			.get(
				`${url}/wp-json/wc/v3/products?consumer_key=ck_8344935599a7d76c1554d0927afbe8fd4396d80c&consumer_secret=cs_2851b1b046bd2347884a7d275a8d45a511b64b3e`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
					url: `${url}/wp-json/wc/v3/products?consumer_key=ck_8344935599a7d76c1554d0927afbe8fd4396d80c&consumer_secret=cs_2851b1b046bd2347884a7d275a8d45a511b64b3e`,
				}
			)
			.then((res) => {
				console.log(res)
				setProducts(res)
			})
			.catch((e) => {
				console.log(e)
			})
	}, [url, setPageData, setProducts])

	useEffect(() => {
		fetchedWPData()
	}, [fetchedWPData])

	if (pageData) {
		if (products) {
			console.log(products)
		}
		if (pageData.status === 200) {
			return (
				<Fragment>
					<ScrollToTop>
						<Routes>
							<Route path='/' element={<Outlet />}>
								<Route index path='/' element={<Home />} />

								{pageData.data.pages.all_pages.map((i, k) =>
									i.page.toLowerCase() === 'home' ? (
										<Route
											index
											path={`/${i.page}`}
											element={<Home />}
											key={k}
										/>
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
		} else {
			return null
		}
	}
}

export default App

