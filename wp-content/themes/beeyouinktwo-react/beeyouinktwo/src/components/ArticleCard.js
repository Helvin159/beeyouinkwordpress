import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ data, id }) => {
	return (
		<Fragment>
			<style>
				{`.card-${id}{
                        background-image: ${`url(${data.images[0].src});`}
						transition: .23s ease-in;
						
                    }
                    
                    .card-${id}:hover{
                        background-image: ${`linear-gradient(90deg,rgba(0, 0, 0, 0.75),
                        rgba(0, 0, 0, 0.75)),url(${data.images[0].src});`}
						transition:  .23s ease-in;
                    }

                    `}
			</style>
			<div className={`products-container__col__card card-${id}`}>
				<div className='products-container__col__card__title'>
					<Link to={data.slug}>
						<h4>{data.name}</h4>

						{data.price && <p>${data.price}</p>}
					</Link>
				</div>

				{data.short_description && (
					<div
						className='products-container__col__card__content'
						dangerouslySetInnerHTML={{ __html: data.short_description }}
					/>
				)}
			</div>
		</Fragment>
	)
}

export default ArticleCard

