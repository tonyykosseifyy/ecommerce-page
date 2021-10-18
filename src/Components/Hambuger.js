import "../Styles/Hamburger.css" ;

const array = [ 1 , 2 , 3] ;

const Hambuger = ({ handleClick , state }) => {
    return (
            <button 
                className={`hamburger ${state ? "clicked" : state === null ? "":"reverse"}`}
                onClick={() => handleClick(!state)}
            >
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </button>
    );
};

export default Hambuger ;