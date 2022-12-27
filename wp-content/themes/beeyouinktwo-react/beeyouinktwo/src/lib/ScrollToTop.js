import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ({ children }) => {
	const { pathname } = useLocation()

	useEffect(() => {
		const siteCover = document.createElement('div')

		// After Scroll Function
		const afterScroll = (e) => {
			if (window.pageYOffset !== 0) {
				document.body.style.position = 'relative'
			} else {
				if (window.pageYOffset === 0) {
					siteCover.style.backgroundColor = ''
					setTimeout(() => {
						document.body.style.position = ''
						siteCover.style.position = ''
						siteCover.remove()
					}, '400')
				}

				window.removeEventListener('scroll', afterScroll)
			}
		}

		// Set event listener if on load, pageYOffset is not 0
		if (window.pageYOffset !== 0) {
			// Loading Cover
			siteCover.style.position = 'absolute'
			siteCover.style.width = '100vw'
			siteCover.style.bottom = '0px'
			siteCover.style.top = '0px'
			siteCover.style.backgroundColor = '#000'
			siteCover.style.transition = 'ease-in .400s'
			siteCover.style.zIndex = '1'

			// Insert Loading Cover Here
			const body = document.getElementById('root')
			document.body.insertBefore(siteCover, body)

			// Event listener
			window.addEventListener('scroll', afterScroll)
		}

		window.scrollTo(0, 0)
	}, [pathname])

	return children || null
}

export default ScrollToTop

