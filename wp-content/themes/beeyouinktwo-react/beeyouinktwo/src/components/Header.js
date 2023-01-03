import React, { Fragment, useContext } from 'react'
import { PageContext } from '../lib/PageContext'
import { CartContext } from '../lib/CartContext'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import CartDropdown from './CartDropdown'

function Header() {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext)
	const { pageData } = useContext(PageContext)

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

	return (
		<Fragment>
			<header className='navigation'>
				<Row>
					<Col sm={3} className='navigation__logo col-xs-12'>
						<div className='mx-auto text-center py-3'>
							<Link tabIndex={0} className='display-6 didot' to='/'>
								BeeYou Ink
							</Link>
						</div>
					</Col>
					<Col sm={9} className='navigation__items d-xs-none'>
						<Row className='justify-content-between navigation__items__contact font-dark-gray'>
							<Col sm={12}>
								<Link
									tabIndex={0}
									className='navigation__items__contact__item '>
									Email
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
								<div className='py-1 text-center'>
									<button
										className='btn btn-secondary'
										tabIndex={0}
										onClick={toggleIsCartOpen}>
										Cart
									</button>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</header>
			<div>{isCartOpen && <CartDropdown />}</div>
		</Fragment>
	)
}

export default Header

