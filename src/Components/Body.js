import { useState } from "react";
import "../Styles/Body.css" ;
import styled from "styled-components";
import imageProductThumbnail1 from "../Assets/image-product-1-thumbnail.jpg";
import imageProductThumbnail2 from "../Assets/image-product-2-thumbnail.jpg";
import imageProductThumbnail3 from "../Assets/image-product-3-thumbnail.jpg";
import imageProductThumbnail4 from "../Assets/image-product-4-thumbnail.jpg";
import imageProduct1 from "../Assets/image-product-1.jpg";
import imageProduct2 from "../Assets/image-product-2.jpg";
import imageProduct3 from "../Assets/image-product-3.jpg";
import imageProduct4 from "../Assets/image-product-4.jpg";

const thumbnails = [imageProductThumbnail1 , imageProductThumbnail2 , imageProductThumbnail3 ,imageProductThumbnail4];
const productImages = [imageProduct1,imageProduct2,imageProduct3,imageProduct4];

const Body = () => {
    const [ image , setImage ] = useState(imageProduct1) ;
    return (
        <BodyWrapper>
            <LeftBodyWrapper>
                <div className="big-image-product">
                    <img src={image ? image : ""} alt="Product Image" />
                </div>
                
                <ThumbnailsContainer>
                    { thumbnails.map((item,index) => (
                        <div 
                            key={index} 
                            style={{position:"relative",cursor: "pointer"}}
                            onClick={() => setImage(productImages[index])} 
                        >
                            <img 
                                src={item} 
                                alt="Product Image" 
                            />
                            <div 
                                className={`image-overflow ${productImages[index] === image ? "image-active":""}`}>
                            </div>
                        </div>
                    ))}
                </ThumbnailsContainer>
            </LeftBodyWrapper>

            <RightBodyWrapper className='right-body-wrapper'>
                <h4>Sneaker company</h4>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>
                    lorem20 asdko aspodja sodpaj sdoapjdoiaj
                    aoishdahsiodhaosidhaaopsjda djpa doa jdoasd
                    iaosdjaijpdoajsojaosdpjaposjdoasjpaojsoda d
                    iasjdajiosjdaso poajsdoajs poajsdoaj oajs pd
                    oaisd paodqwodnjvn sdl
                </p>
                <h3>
                    $125.00 
                    <span className='sale-span'>50%</span>
                    <br />
                    <p>$250.00</p>
                </h3>
            </RightBodyWrapper>
        </BodyWrapper>
    );
};

export default Body ;

const BodyWrapper = styled.section`
    display: flex ;
    align-items: center ;
    justify-content: center;
    padding: 60px 120px ;
    max-width: 85vw;
    margin : 0 auto ;
`

const LeftBodyWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr ;
    grid-template-rows: 400px 70px;
    grid-gap: 20px ;

    & > div.big-image-product > img {
        width: 100% ;
        height: 100% ;
        object-fit: contain;
        border-radius: 35px;
    }
`

const ThumbnailsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 90px);
    grid-template-rows: 90px; 
    grid-gap: 20px ;

    & img {
        width: 100% ;
        height:100% ;
        object-fit: contain ;
        border-radius: 12px;
    }
`
const RightBodyWrapper = styled.div`
    margin-left: 80px;
`
