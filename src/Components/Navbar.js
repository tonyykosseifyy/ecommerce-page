import styled from "styled-components" ;
import Hamburger from "./Hambuger";
import Test from "./Test";
import logo from "../Assets/logo.svg" ;

const links = ["Collections" , "Men", "Women","About","Contact"] ;

const Navbar = ( props ) => {
    return (
        <NavbarWrapper>

            <Hamburger {...props} />
            <SneakersLogo src={logo} alt="Sneakers logo" />
            <LinksContainer>
                {links.map((item, index) => (
                    <Link key={index}>{item}</Link>
                ))}
            </LinksContainer>
            <Test />
        </NavbarWrapper>
    );
};

export default Navbar ;


const NavbarWrapper = styled.nav`
    width: 85vw ;
    border-bottom : 1px solid #E8E7EB ;
    margin: 0 auto ;
    height: 80px ;
    display: flex ; 
    align-items: center ;
`

const SneakersLogo = styled.img`
    width: 138px ;
    height: 20px ;
    object-fit: contain ;
`

const LinksContainer = styled.div`
    display: flex ;
    align-self: stretch ;
    margin-left: 40px ;
`
const Link = styled.a`
    color: var(--Dark-grayish-blue) ;
    cursor: pointer;
    text-decoration: none ;
    transition: .4s ease-out ;
    display: block ;
    margin: 0 12px ;
    margin-top: 32px ;
    border-bottom: 3px solid transparent ;
    &:hover {
        color: black ;
        border-bottom: 3px solid var(--Orange)
    }
`
