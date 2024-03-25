import { useLocation } from "react-router-dom"
export default function Login(props) {
	const {setPath, user} = {...props}
	setPath(useLocation().pathname)
	return(
		<div>
			<h1>login</h1>
			<hr/>
			<p>
				Olá, {user.name}!
			</p>
		</div>
	)
}