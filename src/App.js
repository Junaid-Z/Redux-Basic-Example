
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Counter from './pages/Counter';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Counter />} />
				<Route path='/home' element={<Home />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
