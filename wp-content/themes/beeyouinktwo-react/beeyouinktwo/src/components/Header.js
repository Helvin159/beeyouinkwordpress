import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import { PageContext } from '../lib/pageContext'

function Header() {
	const { pageData } = useContext(PageContext)
	return (
		<header className='navigation'>
			<Row>
				<Col sm={3} className='navigation__logo col-xs-12'>
					<div className='mx-auto text-center pt-3'>
						<Link tabIndex={0} className='display-6 didot' to='/'>
							BeeYou Ink
						</Link>
					</div>
				</Col>
				<Col sm={9} className='navigation__items d-xs-none'>
					<Row className='justify-content-between navigation__items__contact font-dark-gray'>
						<Col sm={12}>
							<Link tabIndex={0} className='navigation__items__contact__item '>
								Email
							</Link>
							<Link tabIndex={0} className='navigation__items__contact__item '>
								Phone #{' '}
							</Link>
							<Link tabIndex={0} className='navigation__items__contact__item '>
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
							<div className='pt-2 text-center'>
								<Link tabIndex={0} to='/'>
									Info
								</Link>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</header>
	)
}

export default Header

