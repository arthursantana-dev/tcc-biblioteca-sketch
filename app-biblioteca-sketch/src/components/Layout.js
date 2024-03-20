import { Outlet } from "react-router-dom";

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
			<Outlet/>
		</div>
	)
}