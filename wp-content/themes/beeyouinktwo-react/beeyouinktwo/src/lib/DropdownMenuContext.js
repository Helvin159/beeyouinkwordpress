import { createContext, useState } from 'react'

export const DropdownMenuContext = createContext({
	isDropdownMenuOpen: false,
	setIsDrowpdownMenuOpen: () => {},
})

export const DropdownMenuProvider = ({ children }) => {
	const [isDropdownMenuOpen, setIsDrowpdownMenuOpen] = useState(false)

	const toggleisDropdownMenuOpen = () => {
		setIsDrowpdownMenuOpen(!isDropdownMenuOpen)
	}

	const value = {
		isDropdownMenuOpen,
		setIsDrowpdownMenuOpen,
		toggleisDropdownMenuOpen,
	}

	return (
		<DropdownMenuContext.Provider value={value}>
			{children}
		</DropdownMenuContext.Provider>
	)
}

