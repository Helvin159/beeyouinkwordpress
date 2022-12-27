import React, { useEffect, useCallback, useState, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import ContactUs from './pages/ContactUs'
import Pricing from './pages/Pricing'
import Faq from './pages/Faq'
import Blog from './pages/Blog'
import ScrollToTop from './lib/ScrollToTop'
import Outlet from './pages/Outlet'
import axios from 'axios'
import MyData from './lib/data.json'

const App = () => {
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
			console.log(MyWpData)
			return (
				<Fragment>
					<ScrollToTop>
						<Routes>
							<Route path='/' element={<Outlet props={MyData} />}>
								<Route
									index
									path='/'
									element={<Home props={MyData} wpData={MyWpData.data} />}
								/>
								<Route path='/about' element={<About props={MyData} />}></Route>
								<Route path='/portfolio' element={<Portfolio />}></Route>
								<Route path='/contact-us' element={<ContactUs />}></Route>
								<Route path='/pricing' element={<Pricing />}></Route>
								<Route path='/shop' element={<Home props={MyData} />}></Route>
								<Route path='/faq' element={<Faq />}></Route>
								<Route path='/blog' element={<Blog />}></Route>
								<Route path='/landing' element={<Home />}></Route>
							</Route>
						</Routes>
					</ScrollToTop>
				</Fragment>
			)
		}
	}
}

export default App

