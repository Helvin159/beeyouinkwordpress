import React, { useEffect, useState } from 'react'
import PortfolioGallery from './components/PortfolioGallery'
import Loading from './components/Loading'
import $ from 'jquery'
import './assets/app.css'

function App() {
	const [data, setData] = useState(null)

	const rootUrl =
		window.location.href !== 'beeyouink.local/'
			? 'http://beeyouink.local/'
			: window.location.href
	useEffect(() => {
		$.getJSON(`${rootUrl}wp-json/wp/v2/tattoo_work`, (res) => {
			setData(res)
		})
	}, [rootUrl])

	return data ? <PortfolioGallery props={data} /> : <Loading />
}

export default App

