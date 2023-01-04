import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DropdownMenuContext } from '../lib/DropdownMenuContext'
import { PageContext } from '../lib/PageContext'

const DropdownMenu = () => {
	const { pageData } = useContext(PageContext)
	const { isDropdownMenuOpen, setIsDrowpdownMenuOpen } =
		useContext(DropdownMenuContext)

	const toggleDropDown = () => setIsDrowpdownMenuOpen(!isDropdownMenuOpen)
	return (
		<div className={`navigation__drop-down-menu `}>
			<div className='navigation__drop-down-menu__close-btn'>
				<button onClick={toggleDropDown}>&#10005;</button>
			</div>
			<div className='mx-auto text-center pb-4 navigation__drop-down-menu__logo'>
				<Link
					tabIndex={0}
					onClick={toggleDropDown}
					className='display-2 didot navigation__drop-down-menu__logo__link'
					to='/'>
					BeeYou Ink
				</Link>
			</div>
			{pageData.data.pages.featured_pages.map((i, k) => (
				<div className='py-4 navigation__drop-down-menu__item' key={k}>
					<Link
						className='navigation__drop-down-menu__item__link didot'
						onClick={toggleDropDown}
						to={i.slug}>
						{i.page}
					</Link>
				</div>
			))}
		</div>
	)
}

export default DropdownMenu

