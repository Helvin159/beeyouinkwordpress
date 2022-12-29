import React from 'react'

const TikTokEmbed = () => {
	return (
		<div className='max-w-920 mx-auto'>
			<blockquote
				className='tiktok-embed'
				cite='https://www.tiktok.com/@beeyouink'
				data-unique-id='beeyouink'
				data-embed-type='creator'
				style={{ maxWidth: '780px', minWidth: '288px' }}>
				{' '}
				<section>
					{' '}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.tiktok.com/@beeyouink?refer=creator_embed'>
						@beeyouink
					</a>{' '}
				</section>{' '}
			</blockquote>{' '}
			<script async src='https://www.tiktok.com/embed.js'></script>
		</div>
	)
}

export default TikTokEmbed

