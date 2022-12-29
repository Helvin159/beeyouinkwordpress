import React, {
	useEffect,
	useCallback,
	useState,
	Fragment,
	useContext,
} from 'react'
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
import MyData from './lib/data.json'
import TattooArchiveSingle from './pages/TattooArchiveSingle'
import ArticleArchiveSingle from './pages/ArticleArchiveSingle'

const App = () => {
	const [MyWpData, setMyWpData] = useState(null)

	const { pageData, setPageData } = useContext(PageContext)

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
				setMyWpData(res)
				setPageData(res)
			})
			.catch((e) => {
				console.log(e)
			})
	}, [url, setPageData])

	useEffect(() => {
		fetchedWPData()
	}, [fetchedWPData])

	if (pageData) {
		if (pageData.status === 200) {
			return (
				<Fragment>
					<ScrollToTop>
						<Routes>
							<Route
								path='/'
								element={<Outlet props={MyData} wpData={MyWpData.data} />}>
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
									// Tatto Post Type Single Post
									pageData.data.tattoo_work.map((i, k) => (
										<Route
											path={`portfolio/${i.slug}`}
											element={<TattooArchiveSingle wpData={i} />}
											key={k}
										/>
									))
								}

								{
									// Tatto Post Type Single Post
									pageData.data.tattoo_work.map((i, k) => (
										<Route
											path={`${i.slug}`}
											element={<TattooArchiveSingle wpData={i} />}
											key={k}
										/>
									))
								}

								{
									// Article Post Type Single Post
									pageData.data.articles.map((i, k) => (
										<Route
											path={`${i.slug}`}
											element={<ArticleArchiveSingle wpData={i} />}
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

