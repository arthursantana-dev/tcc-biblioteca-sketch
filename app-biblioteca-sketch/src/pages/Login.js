import { Form, useLocation } from "react-router-dom"
import Container from "../components/Container"
import LogoLateral from '../assets/img/logo-lateral.png'
import Input from "../components/Input"
import { useState } from "react"
import Info from "../components/Info"

export default function Login(props) {
	const {setPath} = {...props}

	const [RM, setRM] = useState()

	setPath(useLocation().pathname)

	function handleRMChange(e){
		// const value = e.key

		// const regex = /^[0-9\b]+$/

		// if(regex.test(value)){
		// 	setRM(value)
		// }

		
	}

	//se mexer explode
	function onKeyDownRM(e){	
		if (!/^\d$|^Backspace$/.test(e.key)) {
			e.preventDefault();
		}
	}
	

	function handleLoginSubmit(e){
		e.preventDefault()
		
		window.alert(RM)
	}

	return(
		<div className="flex flex-col items-center h-screen justify-center">
			<img className="login__logo" src={LogoLateral}/>
			<Container>
				<h1>Login de Aluno</h1>
				<form className="flex flex-col items-center gap-3" onSubmit={handleLoginSubmit}>
					<span className="gap-5">
						<label className="mr-10 text-lg">RM:</label> 
						<input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-70 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" placeholder="000000" pattern="[0-9]*"  onChange={handleRMChange} onKeyDown={onKeyDownRM} value={RM} maxLength={"6"} type="text"/>
						</span>
					
					<button className="button no-wrap align-center mx-2 w-full py-2 px-4 rounded text-lg" type="submit">
						Entrar
					</button>
					
				</form>
			</Container>
		</div>
	)
}