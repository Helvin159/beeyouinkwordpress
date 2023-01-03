import React, { Fragment, useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// Context
import { PageContext } from './lib/PageContext'
import { ProductContext } from './lib/ProductContext'

// Components
import Outlet from './pages/Outlet'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import ScrollToTop from './lib/ScrollToTop'
import TattooArchiveSingle from './pages/TattooArchiveSingle'
import TeamArciveSingle from './pages/TeamArchiveSingle'
import ArticleArchiveSingle from './pages/ArticleArchiveSingle'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Checkout from './pages/Checkout'
import { GetData } from './lib/GetData'
import Loading from './components/Loading'
// import Faq from './pages/Faq'
// import Pricing from './pages/Pricing'

const App = () => {
	const { getData } = new GetData()

	const { pageData, allPages } = useContext(PageContext)
	const { products } = useContext(ProductContext)

	useEffect(() => {
		getData()
	}, [])

	if (pageData && products) {
		return (
			<Fragment>
				<ScrollToTop>
					<Routes>
						<Route path='/' element={<Outlet />}>
							<Route index path='/' element={<Home />} />

							{
								// All Pages from Page Post
								allPages.map((i, k) =>
									i.page.toLowerCase() === 'home' ? (
										<Route
											index
											path={`/${i.slug}`}
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
								)
							}
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
	} else {
		return <Loading />
	}
}

export default App

