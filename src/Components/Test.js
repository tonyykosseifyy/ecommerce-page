import "../Styles/Test.css" ;
import { useState } from "react";

const Test = () => {
    const [ open , setOpen ] = useState(false) ;
    return (
            <div 
                className={`test ${open ? "active" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <div className="div1"></div>
                <div className="div2"></div>
                <div className="div3"></div>
            </div>
    );
};

export default Test ;