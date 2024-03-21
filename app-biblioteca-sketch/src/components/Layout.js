import { BrowserRouter, Outlet, Route, useLocation } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import {useState} from 'react';
import Container from "./Container";

export default function Layout(props) {
	const [value, setValue] = useState("")
	const {setPath} = {...props}
	setPath(useLocation().pathname)
	console.log(useLocation().pathname)
	return (
		<div className="flex flex">
			<Container>
				<h1>Layout</h1>
				<a href="/login">
					Login
				</a>
				<Input setValue={setValue}/>
				<Button title={"yeepee"} onClick={() => console.log('yepee')}/>
				
				<Container >
					<p>
						Hello
					</p>
				</Container>
			</Container>


			<Outlet/>
			
		</div>
	)
}