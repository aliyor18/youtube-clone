import React, { createContext,useEffect,useState } from 'react'

export const AuthContext = createContext(null)

const ContextApi = ({children}) => {
	const [value, setValue] = useState(localStorage.getItem("login") || false)

	useEffect(() => {
		localStorage.setItem("login", value)
	},[value])

	return (
		<AuthContext.Provider value={{value,setValue}}>
			<>
				{children}
			</>
		</AuthContext.Provider>
	)
}

export default ContextApi