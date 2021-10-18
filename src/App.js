import { useState } from "react" ;
import Navbar from "./Components/Navbar" ;
import Menu from "./Components/Menu" ;
import Body from "./Components/Body" ;
import styled from "styled-components" ;
import "./App.css" ;


function App() {
  const [ menu , setMenu ] = useState(null) ;
  
  return (
	<div className="app">
		<Navbar state={menu} handleClick={setMenu} />	
		<Body />
		<BlackOverflow onClick={() => setMenu(false)} open={menu} />
		<Menu state={menu} handleClick={setMenu} />
	</div>
  );
}

export default App;


const BlackOverflow = styled.div`
	background-color: rgba(0,0,0,.8) ;
	width: 100% ;
	height: 100% ;
	transition: .4s ease-out ${props => props.open ? "0s":".45s"};
	position: absolute ;
	top: 0 ;
	left: 0 ;
	right: 0;
	bottom: 0 ;
	pointer-events: none ;
	opacity: ${props => props.open ? "1" : "0"} ;
`