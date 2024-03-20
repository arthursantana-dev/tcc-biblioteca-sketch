import { Outlet } from "react-router-dom";
import Button from "./Button";

export default function Layout() {
	return (
		<div className="flex flex-col">
			<h1>Layout</h1>
			<a href="/app">
				App
			</a>
			<a href="/login">
				Login
			</a>
			<Button title={"yeepee"} onClick={() => console.log('yepee')}/>
			<Outlet/>
		</div>
	)
}