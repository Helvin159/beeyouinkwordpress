import React, { Fragment } from 'react'
import { Outlet as Layout } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Outlet = ({ props }) => {
	// const siteCover = document.querySelector('#siteCover')
	// useEffect(() => {
	// 	// Check if DOM is loaded
	// 	window.addEventListener('load', () => {
	// 		if (document.readyState === 'complete') {
	// 			// Fully loaded!
	// 			console.log(document.readyState, 'ready state')
	// 			if (siteCover) {
	// 				siteCover.style.backgroundColor = '#00000000'

	// 				setTimeout(() => {
	// 					siteCover.remove()
	// 				}, 3000)
	// 			}
	// 		}
	// 	})
	// }, [siteCover])

	return (
		<Fragment>
			{
				// <div id='siteCover'></div>
			}

			<Header props={props} />

			<main>
				<Layout />
			</main>

			<Footer props={props} />
		</Fragment>
	)
}

export default Outlet

