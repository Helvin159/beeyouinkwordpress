import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TeamShowCaseComponent = ({ wpData }) => {
	return (
		<Fragment>
			<style>{`
			${wpData
				.map(
					(i, k) =>
						`.team-showcase__team-cards__card__${k}{
							background:linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,1)),url(${i.img_url});
							background-position:center center;
							background-size:cover;
							height:40rem;
						}`
				)
				.join('')}
		`}</style>
			<Container fluid className='team-showcase'>
				<Row className='no-gutters team-showcase__team-cards'>
					{wpData.map((i, k) => (
						<Col sm={4} key={k} className='team-showcase__team-cards__card p-1'>
							<div
								className={`team-showcase__team-cards__card__${k} team-showcase__team-cards__card__inner p-3`}>
								<div className='team-showcase__team-cards__card__inner__member-info'>
									<Link to={i.profile_url}>
										<h3>{i.name}</h3>
									</Link>
									<p>{i.position}</p>
								</div>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</Fragment>
	)
}

export default TeamShowCaseComponent

