import Axios from "axios";
import React from "react";
import Rating from 'react-simple-star-rating';
import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

import Card from '../components/card';
import Heading from '../components/heading';
import SearchBar from '../components/searchBar';
import { render } from "@testing-library/react";
import { useState, setState } from "react";


const MovieListing = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const [itemsToShow, setItemsToShow] = useState(10);
    
  /**
   * function that increments items to show by then, when show more button is clicked
   */
  function showMoreMovies () {
    setItemsToShow( itemsToShow + 10);
   }

    return (

        <div className='container-fluid movie-app'>
            <div className='row d-flex flex-row align-items-center mt-4'>
                <Heading heading="Movies" />
                <button className="col col-2 btn btn-secondary mx-2 " onClick={() => props.showTopTen()}>
                   <span className="hide btn-text">Go back to all</span>
                    <span className="btn-text">Show top 10 movies</span>    
                </button>
                <input className="col-6" type="text" placeholder="search.." onChange={event => {setSearchValue(event.target.value)}}></input>

                {/* <SearchBar searchValue={this.searchValue} setSearchValue={this.setSearchValue}></SearchBar> */}
            </div>

            <div className='row mt-4 top-10 hide'>
                <Card input={searchValue} data={
                    props.movies
                        .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
                        .slice(0, 10)} />
            </div>

            <div className='row mt-4 default'>
                <Card input={searchValue} completeData={props.movies} data={
                    props.movies
                        .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
                        .slice(0, itemsToShow)} />
            </div>

            <button className="btn btn-light border show-more mt-5" onClick={() => showMoreMovies()}>
                <span>Show more</span>
            </button>

            
        </div>
    );
}


export default MovieListing;
