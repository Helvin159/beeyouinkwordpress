import React, { Fragment } from 'react'
import { Outlet as Layout } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Outlet = ({ props, wpData }) => {
	return (
		<Fragment>
			{
				// <div id='siteCover'></div>
			}

			<Header props={props} wpData={wpData} />

			<main>
				<Layout />
			</main>

			<Footer props={props} wpData={wpData} />
		</Fragment>
	)
}

export default Outlet

