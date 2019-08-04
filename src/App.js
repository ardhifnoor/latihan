import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      film: []
    }
  }
  componentWillMount(){
    axios.get('https://facebook.github.io/react-native/movies.json')
    .then((dataFilm)=>{
      this.setState({
        film: dataFilm.data.movies
      })
    })
  };

  render(){
    function renderDaftarFilm(film) {
      return film.map(film => {
        return <li key = {film.id}>{film.title} - {film.releaseYear}</li>
      })
    }
    return(
      <div>
        <h1>Ini portofolio saya</h1>
        <h2>Daftar Film</h2>
        <ul>{renderDaftarFilm(this.state.film)}</ul>
      </div>
    )
  }
}

export default App;
