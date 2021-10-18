import { useState } from "react" ;
import Navbar from "./Components/Navbar" ;
import Menu from "./Components/Menu" ;
import Body from "./Components/Body" ;

function App() {
  const [ menu , setMenu ] = useState(null) ;
  
  return (
	<div className="app">
		<Navbar state={menu} handleClick={setMenu} />
		<Menu state={menu} handleClick={setMenu} />
		<Body />
	</div>
  );
}

export default App;
