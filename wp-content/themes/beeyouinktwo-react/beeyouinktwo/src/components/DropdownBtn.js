import React, { Fragment, useContext } from 'react'
import { DropdownMenuContext } from '../lib/DropdownMenuContext'

const DropdownBtn = () => {
	const { toggleisDropdownMenuOpen } = useContext(DropdownMenuContext)

	return (
		<Fragment>
			<button
				className='btn btn-tertiary'
				tabIndex={0}
				onClick={toggleisDropdownMenuOpen}>
				Menu
			</button>
		</Fragment>
	)
}

export default DropdownBtn

