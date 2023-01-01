import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ data, id }) => {
	return (
		<Fragment>
			<style>
				{`
                    .blog-card-${id}{
                        background-image: ${`url(${data.image});`}
						transition: .23s ease-in;
						
                    }
                    
                    .blog-card-${id}:hover{
                        background-image: ${`linear-gradient(90deg,rgba(0, 0, 0, 0.75),
                        rgba(0, 0, 0, 0.75)),url(${data.image});`}
						transition:  .23s ease-in;
                    }

                    `}
			</style>
			<div className={`products-container__col__card blog-card-${id}`}>
				<div className='products-container__col__card__title text-left'>
					<Link to={data.slug}>
						<h4>{data.title}</h4>
						<p>{data.post_date}</p>
					</Link>
				</div>
			</div>
		</Fragment>
	)
}

export default BlogCard

