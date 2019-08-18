import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {
      film: [],
      post: [],
      user: []
    }
  }

  componentWillMount(){

    Axios
    .get('https://facebook.github.io/react-native/movies.json')
    .then((dataFilm)=>{
      this.setState({
        film: dataFilm.data.movies
      })
    })

    Axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((dataPosts)=>{
      this.setState({
        post: dataPosts.data
      })
    })

    Axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((dataUser)=>{
      this.setState({
        user: dataUser.data
      })
    })

    var jktURL  = 'http://api.jakarta.go.id/v1/puskesmas/';
    var jktCONF = {
      headers: {
        'Authorization' : 'yy+kX9pGSdoS7/ncc+Zx/vO8W3U2KnlcElRf67Cnvw9i9wN1QaU5tLv8ISfIjTDO'
      }
    }

    Axios
    .get(jktURL)
  };

  render(){

    function renderDaftarFilm(film) {
      return film.map(film => {
        return <li key = {film.id}>{film.title} - {film.releaseYear}</li>
      })
    }

    function renderDaftarPost(post) {
      return post.map(post => {
        return <li key = {post.id}>{post.id} - {post.title}</li>
      })
    }

    var css = {
      border: '1px solid black',
      padding: '12px'
    }

    const data = this.state.user.map((user, index)=>{
      var id = user.id;
      var name = user.name;
      var mail = user.email;
      var phone = user.phone;
      return <tr style = {css} key = {index}>
        <td style = {css}>{id}</td>
        <td style = {css}>{name}</td>
        <td style = {css}>{mail}</td>
        <td style = {css}>{phone}</td>
      </tr>
    })

    return(
      <div>
        <h1>Ini portofolio saya</h1>

        <h2>Daftar Film</h2>
        <ul>{renderDaftarFilm(this.state.film)}</ul>

        <h2>Daftar Post</h2>
        <ul>{renderDaftarPost(this.state.post)}</ul>

        <h2>Daftar User</h2>
        <table style={css}>
          <tbody>
            <tr>
              <th style={css}>No</th>
              <th style={css}>Nama</th>
              <th style={css}>Email</th>
              <th style={css}>Telepon</th>
            </tr>
            {data}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
