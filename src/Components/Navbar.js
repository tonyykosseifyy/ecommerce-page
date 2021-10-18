import styled from "styled-components" ;
import Hamburger from "./Hambuger";
import logo from "../Assets/logo.svg" ;
import imageAvatar from "../Assets/image-avatar.png" ;
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from '@mui/material';

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
                    
            <LeftNavbarContainer>
                <IconButton>
                    <ShoppingCartOutlinedIcon titleAccess="Cart" fontSize="medium" sx={{color: "black"}} />
                </IconButton>

                <div>
                    <img src={imageAvatar} alt="User Avatar" />
                </div>

            </LeftNavbarContainer>
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
    @media (max-width:1100px) {
        width: 100% ;
        padding: 0 10px;
    }
    @media (max-width: 700px) {
        border-bottom: none ;
        padding: 10px 25px;
    }
    @media (max-width:500px){
        padding: 10px ;
    }
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
    @media (max-width:880px) {
        margin-left: 0 auto ; 
    }
    @media (max-width: 700px){
        display: none ;
    }
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
    @media (max-width:1100px) {
        margin: 0 5px;
        font-size: 15px; 
        margin-top: 32px;
    }
`

const LeftNavbarContainer = styled.div`
    margin-left: auto ;
    display: flex ;
    align-items: center ;
    & div {
        width: 40px ;
        height: 40px ;
        border-radius: 50% ;
        outline: 2px solid transparent ;
        transition: .3s ease-out ;
        cursor: pointer ;
        margin-left: 15px ;
    }
    & div:hover {
        outline: 2px solid var(--Orange) ;
    }
    & img {
        width: 100% ;
        height: 100% ;
        object-fit: contain ;
    }

`