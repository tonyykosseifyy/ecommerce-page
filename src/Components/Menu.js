import "../Styles/Menu.css" ;
import Hamburger from "./Hambuger";
import styled from "styled-components" ;
const links = ["Collections" , "Men", "Women","About","Contact"] ;

const Menu = (props) => {
    return (
        <MenuWrapper open={props.state} >
            <Hamburger {...props} />
            <LinkContainer>
                { links.map((item , index) => (
                    <Link 
                        key={index} 
                        number={index}
                        open={props.state}
                    >
                        {item}
                    </Link>
                ))}
            </LinkContainer>
        </MenuWrapper>
    );
};

export default Menu ;


const LinkContainer = styled.div`
    display: flex ;
    flex-direction: column ;
`

const Link = styled.a`
    font-weight: 700 ;
    cursor: pointer;
    text-decoration: none ;
    transition: transform .4s cubic-bezier(0.18, 0.89, 0.29, 1.07) ${props => `.${props.number+2}s`}  ;
    display: block ;
    padding: 7px 0 ;
    padding-left: 25px ;
    transform: ${props => props.open ? "none" : "translateX(-100%)"};
`

const MenuWrapper = styled.div`
    position: fixed ;
    top: 0 ;
    bottom: 0 ;
    left: 0 ;
    min-width: 60vw ;
    background-color: white ;
    transition: .3s ease-out ${props => props.open ? "0s":".5s"} ;
    transform: ${props => props.open ? "none":"translate(-100%)"};
    padding: 25px 0 ;

    & > button {
        margin-left: 30px ;
        margin-bottom: 45px ;
    }
`