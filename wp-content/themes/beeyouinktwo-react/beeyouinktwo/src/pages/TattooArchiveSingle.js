import React from 'react'

const TattooArchiveSingle = ({ wpData }) => {
	return (
		<div>
			<h1>{wpData.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: wpData.content }} />
			<img src={wpData.image} alt={wpData.title} />
		</div>
	)
}

export default TattooArchiveSingle

