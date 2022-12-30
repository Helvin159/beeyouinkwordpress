import React, { Fragment } from 'react'

const SingleHero = ({ title, subTitle, background }) => {
	return (
		<Fragment>
			<style>{`
        .single-hero{

            background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${background}) ;
        }
        `}</style>
			<div className='single-hero py-5'>
				<div className='container py-4 mx-auto max-w-920 single-hero__container text-center'>
					<h1 tabIndex={0}>{title}</h1>
					{subTitle !== null ? <p tabIndex={0}>{subTitle}</p> : ''}
				</div>
			</div>
		</Fragment>
	)
}

export default SingleHero

