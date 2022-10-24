import { useState } from "react"


const useFetching =  () => {
	const [loading, setLoading] = useState(true)
	const [loading1, setLoading1] = useState(true)
	const [error, setError] = useState()

	const request =async () => {
		try{
			const res = await	fetch("https://reqres.in/api/users?page=2");
			const data = await res.json()
			return data
		}
		catch(e) {
			setError(e.message);
			setLoading(false)
		}
	}

	const request2 = async (id) => {
		try{
			setLoading1(true)
			const res = await	fetch(`https://reqres.in/api/users/${id}`);
			const data = await res.json()
			setLoading(false)
			return data
		}
		catch(e) {
			setError(e.message);
			setLoading(false)
		}
	}

	return {request,request2,loading1}
}

export default useFetching