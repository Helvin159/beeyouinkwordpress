import axios from 'axios'
import { useContext } from 'react'
import { PageContext } from './PageContext'
import { ProductContext } from './ProductContext'

export function GetData() {
	const { setPageData, setAllPages, setFeaturedPages, setCollagePages } =
		useContext(PageContext)
	const { setProducts } = useContext(ProductContext)
	const keyAndSecret = `key=${process.env.REACT_APP_CONSUMER_KEY}&consumer_secret=${process.env.REACT_APP_CONSUMER_SECRET}`

	this.url =
		window.location.hostname === 'localhost'
			? 'http://beeyouink.local'
			: window.location.origin

	this.reqOne = axios.get(`${this.url}/wp-json/beeYouInk/v1/mainData`)
	this.reqTwo = axios.get(
		`https://beeyouink.mrrymer.tech/wp-json/wc/v3/products?consumer_${keyAndSecret}`
	)

	this.getData = async () => {
		await axios
			.all([this.reqOne, this.reqTwo])
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
	}
}

