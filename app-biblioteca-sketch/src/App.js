
import "tailwindcss/tailwind.css"
import './App.css';
import Layout from './components/Layout';
import Login from './pages/Login'
import Config from "./pages/Config";
import User from "./pages/User";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const [path, setPath] = useState('') 

  return (
    <BrowserRouter>
	
		<Routes>
			<Route path='/' element={<Login setPath={setPath} />}/>	

			{/* <Route path='/' element={<Layout setPath={setPath} path={path} user={user}/>}>
				

				<Route path='/config' element={<Config setPath={setPath} user={user}/>}/>

				<Route path='/user' element={<User setPath={setPath} user={user}/>}/>

			</Route> */}
		</Routes>
	
	</BrowserRouter>
  );
}

export default App;
