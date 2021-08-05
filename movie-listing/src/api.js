import Axios from "axios";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';


class GetData extends React.Component{

  constructor (props) {
    super(props)
    this.state = {
      data: [],
      movies:[],
      tvShows:[],
      searchValue: "",
      itemsToShow: 10,
      topTen: false,
    }
  }

  /**
   * function that increments items to show by then, when show more button is clicked
   */

  showMore() {
      this.setState({ itemsToShow: this.state.itemsToShow + 10});
    
  }

  showTopTen(type) {
    
    var defaultMovies = document.querySelector(".default-movies");
    var showMoreBtn = document.querySelector(".show-more");
    var topTen = document.querySelector(".top-10");

   

      topTen.classList.toggle("hide");
      defaultMovies.classList.toggle("hide");
      showMoreBtn.classList.toggle("hide");
      
   
    
  
    

  
  }

  setMoviesAndShows() {
    this.state.data.forEach(element => {
      if (element.type === 'movie'){
          this.state.movies.push(element);
        }
        else{
          this.state.tvShows.push(element)
        }
    })
  }


   // adding all items retrieved from the JSON server to the movies array
   componentDidMount() {
    Axios.get("http://localhost:4300/data").then((response) => {
      this.setState({ data: response.data });
    });

    
    

  }


    render() {

      return (

    <div className='container-fluid movie-app'> 
    

    </div>
  );
      }
}

export default GetData;
