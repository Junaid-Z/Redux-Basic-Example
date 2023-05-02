import React from 'react'
import { useDispatch } from 'react-redux'
import { setLogin } from '../redux/reducers/loginSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate();
	return (
		<>
			<div className='counter'>

				<div>Login</div>
				<div>
					<button style={{ width: '150px' }} onClick={() => {
						dispatch(setLogin({ username: 'test@email.com', password: '123456' }));
						navigate('/home')
					}}>Login</button>
				</div>
			</div>
		</>
	)
}

export default Login