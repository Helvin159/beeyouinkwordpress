import React from 'react'
import { Link } from 'react-router-dom'

const ViewMoreBtn = ({ slug }) => {
	return (
		<div className='max-w-30-per max-w-sm-100 mx-auto text-center p-5 '>
			<Link className='btn btn-secondary' to={slug}>
				View More
			</Link>
		</div>
	)
}

export default ViewMoreBtn

