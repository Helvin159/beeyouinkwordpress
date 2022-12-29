import React from 'react'

const TattooArchiveSingle = ({ wpData }) => {
	return (
		<div className='max-w-1024 mx-auto text-center'>
			<div className='py-5 max-w-860 mx-auto'>
				<h1 tabIndex={0}>{wpData.title}</h1>

				<div
					className='max-w-760 mx-auto'
					tabIndex={0}
					dangerouslySetInnerHTML={{ __html: wpData.content }}
				/>
				<img
					className='img-fluid'
					src={wpData.image}
					alt={wpData.title}
					tabIndex={0}
				/>
			</div>
		</div>
	)
}

export default TattooArchiveSingle

