import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

	<BrowserRouter>
	
		<Routes>
			<Route path='/' element={<Layout/>}>
				<Route path='/app' element={<App/>}/>
				<Route path='/login' element={<Login/>}/>
			</Route>
		</Routes>
	
	</BrowserRouter>
    
  </React.StrictMode>
);