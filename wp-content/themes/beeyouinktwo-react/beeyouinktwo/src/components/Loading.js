import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
	return (
		<div className='loading-animation'>
			<div className='loading-animation__icon'>
				<FontAwesomeIcon icon={faSpinner} />
			</div>
		</div>
	)
}

export default Loading

