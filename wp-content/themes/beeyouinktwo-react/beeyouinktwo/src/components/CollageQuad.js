import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const CollageQuad = ({ data }) => {
	return (
		<Fragment>
			{data.map(
				(i, k) =>
					k <= 3 && (
						<Col sm={6} className='p-0' key={`${k}-${i.page} `}>
							<div className={`small-cards card-${k} `}>
								{(k === 0 || k === 3) && (
									<div className='small-cards__text'>
										<h3>
											<Link to={i.slug}>{i.page}</Link>
										</h3>
									</div>
								)}
							</div>
						</Col>
					)
			)}
		</Fragment>
	)
}

export default CollageQuad

