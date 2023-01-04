import React, { Fragment, useContext } from 'react'
import { PageContext } from '../lib/PageContext'
import { CartContext } from '../lib/CartContext'
import { Link } from 'react-router-dom'
import { DropdownMenuContext } from '../lib/DropdownMenuContext'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import CartDropdown from './CartDropdown'
import CartButton from './CartButton'
import DropdownMenu from './DropdownMenu'
import DropdownBtn from './DropdownBtn'

function Header() {
	const { isCartOpen } = useContext(CartContext)
	const { pageData } = useContext(PageContext)
	const { isDropdownMenuOpen } = useContext(DropdownMenuContext)

	return (
		<Fragment>
			{isDropdownMenuOpen && (
				<style>
					{`body{
				height:100vh;
				overflow:hidden;
			}`}
				</style>
			)}
			<header className='navigation'>
				<Row>
					<Col sm={3} className='navigation__logo  col-xs-9 col-9'>
						<div className='mx-auto text-center py-3'>
							<Link tabIndex={0} className='display-6 didot' to='/'>
								BeeYou Ink
							</Link>
						</div>
					</Col>
					<Col
						sm={3}
						className='navigation__dropdown_btn col-xs-3 d-xs-bloc d-sm-block d-md-none'>
						<div className='mx-auto text-center py-3'>
							<DropdownBtn />
						</div>
					</Col>
					<Col sm={9} className='navigation__items d-xs-none'>
						<Row className='justify-content-between navigation__items__contact font-dark-gray'>
							<Col sm={12}>
								<Link
									tabIndex={0}
									className='navigation__items__contact__item '>
									{pageData.data.email}
								</Link>
								<Link
									tabIndex={0}
									className='navigation__items__contact__item '>
									Phone #{' '}
								</Link>
								<Link
									tabIndex={0}
									className='navigation__items__contact__item '>
									Booking Only
								</Link>
							</Col>
						</Row>
						<Row className='justify-content-between navigation__items__links '>
							<Col sm={10} className='navigation__items__links__col'>
								<ul tabIndex={0} className='pt-2 px-0'>
									{pageData.data.pages.featured_pages.map((i, k) => (
										<li tabIndex={0} className='d-inline-block' key={k}>
											<Link tabIndex={0} className='nav-link' to={i.slug}>
												{i.page}
											</Link>
										</li>
									))}
								</ul>
							</Col>
							<Col
								sm={2}
								className='text-right px-4 navigation__items__links__info'>
								<CartButton />
							</Col>
						</Row>
					</Col>
				</Row>
			</header>
			{isCartOpen && <CartDropdown />}
			{isDropdownMenuOpen && <DropdownMenu />}
		</Fragment>
	)
}

export default Header

