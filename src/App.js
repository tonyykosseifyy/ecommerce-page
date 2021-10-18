import { useState } from "react" ;
import Navbar from "./Components/Navbar" ;

function App() {
  const [ menu , setMenu ] = useState(null) ;
  
  return (
	<div className="app">
		<Navbar state={menu} handleClick={setMenu} />
	</div>
  );
}

export default App;
