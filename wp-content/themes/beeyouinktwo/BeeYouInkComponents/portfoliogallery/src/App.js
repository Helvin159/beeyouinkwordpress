import React, { useEffect, useState } from 'react'
import PortfolioGallery from './components/PortfolioGallery'
import Loading from './components/Loading'
import $ from 'jquery'
import './assets/app.css'

function App() {
	const [data, setData] = useState([])

	const rootUrl = window.location.href
	console.log(rootUrl)

	useEffect(() => {
		$.getJSON(
			`${
				rootUrl === 'localhost:3000' ? rootUrl : 'http://beeyouink.local/'
			}wp-json/wp/v2/tattoo_work`,
			(res) => {
				setData(res)
			}
		)
	}, [rootUrl])

	console.log(data)

	return data ? <PortfolioGallery props={data} /> : <Loading />
}

export default App

