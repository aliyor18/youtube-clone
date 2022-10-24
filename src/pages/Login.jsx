import React, { useContext } from 'react'
import { AuthContext } from '../context/ContextApi'
import './Login.css'

const Login = () => {

	const {setValue} = useContext(AuthContext)

	const loginHandlar = (e) => {
			e.preventDefault()

			setValue(true)
	}
	
	return (
		<div class="Login">
			<div class="section">
				<div class="login bg-white m-4">
					<h1 class="text-center">
						<svg class="img" xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
							<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
							<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
						</svg>
					</h1>
					<h1 class="text-center">You tube</h1>

					<form class="" onSubmit={loginHandlar}>
						<div class="form-group">
							<label class="form-label" type="email">
								Email Address
							</label>
							<input class="form-control" type="email" id="email" required />
							<div class="invalid-feedback">
								Please enter your email address
							</div>
						</div>

						<div class="form-group">
							<label class="form-label" type="password">
								Password
							</label>
							<input
								class="form-control"
								type="password"
								id="password"
								required
							/>
							<div class="invalid-feedback">
								Please enter your password
							</div>
						</div>

						<input
							class="btn btn-primary w-100"
							type="submit"
							value="Sign In"
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login