import React from 'react'
import spinner from '../assets/spinner-solid.svg'

const Loading = () => {
	return (
		<div className='loading-animation'>
			<div className='loading-animation__icon'>
				<img src={spinner} alt='Loading Spinner' />
			</div>
		</div>
	)
}

export default Loading

