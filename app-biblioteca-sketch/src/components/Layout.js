import { Outlet } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import {useState} from 'react';
import Container from "./Container";

export default function Layout() {
	const [value, setValue] = useState("")

	return (
		<div className="flex flex-col">
			<h1>Layout</h1>
			<a href="/app">
				App
			</a>
			<a href="/login">
				Login
			</a>
			<Input setValue={setValue}/>
			<Button title={"yeepee"} onClick={() => console.log('yepee')}/>
			<Outlet/>
			<Container >
				<p>
					Hello
				</p>
			</Container>
		</div>
	)
}