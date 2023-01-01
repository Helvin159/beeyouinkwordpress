import React from 'react'
import { Link } from 'react-router-dom'

const ViewMoreBtn = ({ slug }) => {
	return (
		<div className='max-w-860 mx-auto text-center p-5 '>
			<Link className='btn btn-primary' to={slug}>
				View More
			</Link>
		</div>
	)
}

export default ViewMoreBtn

