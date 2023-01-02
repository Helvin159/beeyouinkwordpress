import React, { Fragment, useContext } from 'react'
import { PageContext } from '../lib/PageContext'
import SingleHero from '../components/SingleHero'
import TattooSingleContent from '../components/TattooSingleContent'

const TattooArchiveSingle = ({ wpData }) => {
	const { pageData } = useContext(PageContext)

	if (wpData) {
		if (pageData) {
			return (
				<Fragment>
					<SingleHero title={wpData.title} background={wpData.image} />
					<div className='max-w-1024 py-5 mx-auto text-center'>
						<div className='max-w-860 mx-auto'>
							<TattooSingleContent wpData={wpData} />
						</div>
					</div>
				</Fragment>
			)
		}
	}
}

export default TattooArchiveSingle

