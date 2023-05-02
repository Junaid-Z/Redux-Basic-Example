import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
	const store = useSelector((state) => state.login)
	console.log(store)
	return (
		<>
			<div className='counter'>
				<div>Home</div>
				<Link to={'/login'}>Login Page</Link>
			</div>
		</>
	)
}

export default Home