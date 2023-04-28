
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Counter from './Counter';


function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Counter />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
