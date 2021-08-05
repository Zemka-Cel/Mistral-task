import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

import Card from '../components/card';
import Heading from '../components/heading';
import { useState } from "react";

const Listing = (props) => {

    const [searchValue, setSearchValue] = useState('');
    const [itemsToShow, setItemsToShow] = useState(20);
    

  /**
   * function that increments items to show by then, when show more button is clicked
   */
  function showMore () {
    setItemsToShow( itemsToShow + 10);
   }

    return (

        <div>
            <div className='row d-flex align-items-center mt-4 px-3'>
                <Heading heading="Movies & TV shows" />
                <button className="col col-2 btn btn-secondary mx-2 " onClick={() => props.showTopTen()}>
                   <span className="hide btn-text">Go back to all</span>
                    <span className="btn-text">Show top 10</span>    
                </button>
                <input className="col-6" type="text" placeholder="search.." onChange={event => {setSearchValue(event.target.value)}}></input>
            </div>

        <div className='container-fluid movie-app'>
            
            <div className='row mt-4 top-10 hide'>
                <Card data={
                    props.data
                        .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
                        .slice(0, 10)} />
            </div>

            <div className='row mt-4 default'>
                <Card input={searchValue} data={
                    props.data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0,itemsToShow)} />
            </div>

            <button className="btn btn-light border show-more mt-5" onClick={() => showMore()}>
                <span>Show more</span>
            </button>
        </div>
        </div>
    );
}


export default Listing;
