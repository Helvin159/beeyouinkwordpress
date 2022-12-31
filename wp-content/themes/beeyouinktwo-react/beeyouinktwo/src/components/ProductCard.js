import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ data, id }) => {
	return (
		<Fragment>
			<div>
				<div className={`products-container__col__card card-${id}`}>
					<div className='products-container__col__card__title'>
						<Link to={data.slug}>
							<h4>{data.name}</h4>
							<p>${data.price}</p>
						</Link>
					</div>
					<div
						className='products-container__col__card__content'
						dangerouslySetInnerHTML={{ __html: data.short_description }}
					/>
				</div>
			</div>
		</Fragment>
	)
}

export default ProductCard

