import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PageContext } from '../lib/pageContext'

const Footer = () => {
	const { pageData } = useContext(PageContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log(e.target)
	}

	return (
		<Fragment>
			<style>{`
			footer {
				background:linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)),
				 url(${pageData.data.tattoo_shop_details.featured_img});
				background-size:cover;
				background-position:center right;
			}
		`}</style>
			<footer>
				<Row>
					<Col sm={6} className='col-xs-12'>
						<div className='mx-auto p-5 p-xs-3 text-xs-center'>
							<Link to='/'>
								<h3>BeeYou Ink</h3>
							</Link>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</Col>
					<Col sm={6}>
						<Row>
							<Col>
								<div className='mx-auto  p-0'>
									<h4>BeeYou Ink</h4>
									<ul>
										{pageData.data.pages.featured_pages.map((i, k) => (
											<li key={k}>
												<Link to={i.slug}>{i.page}</Link>
											</li>
										))}
									</ul>
								</div>
							</Col>
							<Col>
								<div className='mx-auto p-0'>
									<h4>Sub Pages</h4>
									<ul>
										{pageData.data.pages.all_pages.map((i, k) => (
											<li key={k}>
												<Link to={i.slug}>{i.page}</Link>
											</li>
										))}
									</ul>
								</div>
							</Col>
							<Col>
								<div className='mx-auto p-0'>
									<h4>Contact</h4>
									<form method='post'>
										<input type='email' placeholder='Contact me' />
										<button type='submit' onClick={handleSubmit}>
											Submit
										</button>
									</form>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className='no-gutters py-4'>
					<Col sm={10} className='col-xs-12 text-xs-center'>
						<div className='mx-auto'>
							<p className='m-0'>Copyright</p>
						</div>
					</Col>
					<Col sm={2} className='col-xs-12 text-xs-center'>
						<div className='mx-auto'>Social Media</div>
					</Col>
				</Row>
			</footer>
		</Fragment>
	)
}

export default Footer

