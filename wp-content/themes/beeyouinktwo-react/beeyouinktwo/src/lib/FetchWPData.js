import { useContext } from 'react'

import { PageContext } from './lib/pageContext'

import axios from 'axios'

const FetchWPData = async () => {
	const { pageData, setPageData } = useContext(PageContext)

	const url =
		window.location.hostname === 'localhost'
			? 'http://beeyouink.local'
			: window.location.origin

	await axios
		.get(`${url}/wp-json/beeYouInk/v1/mainData`, {
			headers: {
				'Content-Type': 'application/json',
			},
			url: `${url}/wp-json/beeYouInk/v1/mainData`,
		})
		.then((res) => {
			setPageData(res)
		})
		.catch((e) => {
			console.log(e)
		})
}

export default FetchWPData
