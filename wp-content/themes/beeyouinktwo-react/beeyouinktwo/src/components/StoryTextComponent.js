import React, { useContext } from 'react'
import { PageContext } from '../lib/pageContext'
import Container from 'react-bootstrap/Container'

const StoryTextComponent = () => {
	const { pageData } = useContext(PageContext)

	return (
		<Container className='p-5 px-xs-0 story-text' fluid>
			<Container className='max-w-860 px-5 story-text__card mx-auto'>
				{pageData.data.story_text.map(
					(e, i) =>
						e.show_story && (
							<div key={i}>
								<div
									className='story-text__card__copy didot'
									dangerouslySetInnerHTML={{
										__html: e.story_content,
									}}
								/>
								<h5>{e.author}</h5>
								<p className='story-text__card__author'>{e.quoted_artist}</p>
							</div>
						)
				)}
			</Container>
		</Container>
	)
}

export default StoryTextComponent

