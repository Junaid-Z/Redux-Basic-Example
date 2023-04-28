import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/reducers/counterSlice';


const Counter = () => {
	const count = useSelector((state) => state.counter.count)
	const dispatch = useDispatch();
	let [input, setInput] = useState(0)
	return (
		<div className='counter'>
			<div className='count'>{count}</div>
			<div className='input'>
				<input type="text" value={input} onChange={(e) => { setInput(Number(e.target.value)) }} />
			</div>
			<div className='buttons'>
				<button onClick={() => { dispatch(decrement()) }}>Decrement</button>
				<button onClick={() => { dispatch(increment()) }}>Increment</button>
				<button onClick={() => { dispatch(incrementByAmount(input)) }}>Increment By Amount</button>
			</div>
		</div>
	)
}

export default Counter