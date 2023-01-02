import { createContext, useState } from 'react'

export const PageContext = createContext({
	pageData: null,
	allPages: null,
	collagePages: null,
	featuredPages: null,
	setPageData: () => null,
	setAllPages: () => null,
	setCollagePages: () => null,
	setFeaturedPages: () => null,
})

export const PageProvider = ({ children }) => {
	const [pageData, setPageData] = useState(null)
	const [allPages, setAllPages] = useState(null)
	const [collagePages, setCollagePages] = useState(null)
	const [featuredPages, setFeaturedPages] = useState(null)
	const value = {
		pageData,
		setPageData,
		allPages,
		setAllPages,
		collagePages,
		setCollagePages,
		featuredPages,
		setFeaturedPages,
	}

	return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}

