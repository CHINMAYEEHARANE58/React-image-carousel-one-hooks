import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [currIndex, setcurrIndex] = useState(0)

    function handlePrev(){
        setcurrIndex(currIndex > 0? currIndex-1 : images.length-1)
    }

    function handleNext(){
        setcurrIndex(currIndex < images.length -1? currIndex+1 : 0)
    }

    return(
        <>
            <div className="carouselContainer flex">
                <div className="leftArrow arrowDiv flex" onClick={handlePrev}>
                    <ArrowBackIosIcon/>
                </div>
                <img src={images[currIndex].img} />
                <h2 className="title">{images[currIndex].title}</h2>
                <h4 className="caption">{images[currIndex].subtitle}</h4>
                <div className="rightArrow arrowDiv flex" onClick={handleNext}>
                    <ArrowForwardIosIcon/>
                </div>
            </div>
        </>


    )
}

export default Carousel;