import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";


import MovieListing from "./views/movieListing";
import TvShows from "./views/tvShows";
import Listing from "./views/listing";
import {Tabs, Tab} from 'react-bootstrap-tabs';

import Axios from "axios";

class App extends React.Component{

  constructor (props) {
    super(props)
    this.state = {
      data: [],
      movies:[],
      tvShows:[],
      // searchValue: "",
      // itemsToShow: 10
     
    }
  }

  // /**
  //  * function that increments items to show by then, when show more button is clicked
  //  */
  // showMore = () => {
  //     this.setState({ itemsToShow: this.state.itemsToShow + 10});
  // }

  setMoviesAndShows() {
    this.state.data.forEach(element => {
      if (element.type === 'movie'){
          this.state.movies.push(element);
        }
        else{
          this.state.tvShows.push(element)
        }
    })
  };

   showTopTen(type) {
    var topTen = document.querySelector(".top-10");
    var defaultCards = document.querySelector(".default");
    var showMoreBtn = document.querySelector(".show-more");
    var btnTexts = Array.from(document.querySelectorAll(".btn-text"));
    btnTexts.map((btnText) => btnText.classList.toggle("hide"));
    topTen.classList.toggle("hide");
    defaultCards.classList.toggle("hide");
    showMoreBtn.classList.toggle("hide");

  }

   // adding all items retrieved from the JSON server to the movies array
   componentDidMount() {
    Axios.get("http://localhost:4300/data").then((response) => {
      this.setState({ data: response.data });
    });
  }
    


    // const getMovieRequest = async (searchValue) => {

    //   // const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    //   const url = `http://localhost:4300/movies`;
    //   const response = await fetch(url);
    //   const responseJson = await response.json();
    //   // if(responseJson.Search){
    //     setMovies(responseJson);
    //   // }
      
    // }

    // useEffect(() =>{
    //   getMovieRequest();
    // }, []);


    render() {

      return (
        <div>
        {this.setMoviesAndShows()}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5"><p classList="text-light text-center">Mistral - task</p></nav>
          <Tabs classList="p-5">
            <Tab label="Movies"><MovieListing movies={this.state.movies} itemsToShow={this.state.itemsToShow}  showTopTen={this.showTopTen} /></Tab>
            <Tab label="TV Shows"><TvShows TvShows={this.state.tvShows} itemsToShow={this.state.itemsToShow}  showTopTen={this.showTopTen}/></Tab>
            <Tab label="View All"><Listing data={this.state.data} itemsToShow={this.state.itemsToShow}  showTopTen={this.showTopTen}/></Tab>
          </Tabs>

          <footer class="navbar navbar-expand-lg navbar-dark bg-dark mt-5">
            <p classList="text-light">Azemina Celebic</p></footer>
        </div>
      );
    }
}

export default App;
