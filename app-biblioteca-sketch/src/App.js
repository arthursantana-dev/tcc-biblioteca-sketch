
import "tailwindcss/tailwind.css"
import './App.css';
import Layout from './components/Layout';
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [path, setPath] = useState('') 
  return (
    <BrowserRouter>
	
		<Routes>
			<Route path='/' element={<Layout setPath={setPath}/>}>
				<Route path='/login' element={<Login setPath={setPath}/>}/>
			</Route>
		</Routes>
	
	</BrowserRouter>
  );
}

export default App;
