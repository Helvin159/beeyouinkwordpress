import { createContext, useState } from 'react'

export const PageContext = createContext({
	pageData: null,
	setPageData: () => null,
})

export const PageProvider = ({ children }) => {
	const [pageData, setPageData] = useState(null)
	const value = { pageData, setPageData }

	return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}

