import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const PortfolioCard = ({ data, id }) => {
	return (
		<Fragment>
			<style>
				{`
                    .portfolio-card-${id}{
                        background-image: ${`url(${data.image});`}
						transition: .23s ease-in;
						
                    }
                    
                    .portfolio-card-${id}:hover{
                        background-image: ${`linear-gradient(90deg,rgba(0, 0, 0, 0.75),
                        rgba(0, 0, 0, 0.75)),url(${data.image});`}
						transition:  .23s ease-in;
                    }

                    `}
			</style>
			<div className={`products-container__col__card portfolio-card-${id}`}>
				<Link to={data.slug}>
					<div className='products-container__col__card__title text-left'>
						<h4>{data.title}</h4>
						<p className='portfolio__links' to={data.artist.post_name}>
							{data.artist.post_title}
						</p>
					</div>
				</Link>
			</div>
		</Fragment>
	)
}

export default PortfolioCard

