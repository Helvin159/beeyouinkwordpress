import React, { useEffect, useCallback, useState, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
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
import MyData from './lib/data.json'
import TattooArchiveSingle from './pages/TattooArchiveSingle'
import ArticleArchiveSingle from './pages/ArticleArchiveSingle'

const App = ({ data }) => {
	console.log(data)
	const [MyWpData, setMyWpData] = useState(null)

	const url =
		window.location.hostname === 'localhost'
			? 'http://beeyouink.local'
			: window.location.origin

	const fetchedWPData = useCallback(() => {
		axios
			.get(`${url}/wp-json/beeYouInk/v1/mainData`, {
				headers: {
					'Content-Type': 'application/json',
				},
				url: `${url}/wp-json/beeYouInk/v1/mainData`,
			})
			.then((res) => {
				setMyWpData(res)
			})
			.catch((e) => {
				console.log(e)
			})
	}, [url])

	useEffect(() => {
		fetchedWPData()
	}, [fetchedWPData])

	if (MyWpData) {
		if (MyWpData.status === 200) {
			return (
				<Fragment>
					<ScrollToTop>
						<Routes>
							<Route
								path='/'
								element={<Outlet props={MyData} wpData={MyWpData.data} />}>
								<Route
									index
									path='/'
									element={<Home props={MyData} wpData={MyWpData.data} />}
								/>

								{MyWpData.data.pages.all_pages.map((i, k) =>
									i.page.toLowerCase() === 'home' ? (
										<Route
											index
											path='/'
											element={<Home props={MyData} wpData={MyWpData.data} />}
											key={k}
										/>
									) : i.page.toLowerCase() === 'about' ? (
										<Route
											path={`/${i.page.toLowerCase()}`}
											element={<About props={MyData} wpData={MyWpData.data} />}
											key={k}
										/>
									) : i.page.toLowerCase() === 'portfolio' ? (
										<Route
											path={`/${i.page.toLowerCase()}`}
											element={
												<Portfolio
													props={MyData}
													wpData={MyWpData.data.tattoo_work}
												/>
											}
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
									// Tatto Post Type Single Post
									MyWpData.data.tattoo_work.map((i, k) => (
										<Route
											path={`portfolio/${i.slug}`}
											element={
												<TattooArchiveSingle
													wpData={MyWpData.data.tattoo_work[k]}
												/>
											}
											key={k}
										/>
									))
								}

								{
									// Article Post Type Single Post
									MyWpData.data.articles.map((i, k) => (
										<Route
											path={`${i.slug}`}
											element={
												<ArticleArchiveSingle
													wpData={MyWpData.data.articles[k]}
												/>
											}
											key={k}
										/>
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

