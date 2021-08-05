import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const Card = (props) => {

    const rating = {};
    
    return (
        <>
        {
        props.data
        .filter((element) => {
            if(props.input == undefined) {
                return element
            }
            else if (element.title.toLowerCase().includes(props.input.toLowerCase())){
                return element
            }
        })
        .map((element,index) => 
            <div className="d-flex flex-column justify-content-between mt-3">
                <img src={element.cover_img} alt="element"></img>
                <h6 className="m-0 font-weight-bold">{element.title}</h6>
                <p className="m-0 p-0">Type: {element.type}</p>
                <div className="d-flex align-items-end">
                    { rating['--rating'] = element.rating }
                    <div className="Stars p-1 " style={rating} aria-label="Rating of this product is 2.3 out of 5."></div>
                </div>
            </div>
        )}
        
        </>
    )
}

export default Card;