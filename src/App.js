import React, { Component } from 'react';
import Axios from 'axios';
import {Link, Route} from 'react-router-dom'

import Karyawan from './pages/karyawan';
import Upload from './pages/Upload';
import { provider, auth } from './firebase';

class App extends Component {

  constructor(){
    super();
    this.state = {
      film: [],
      post: [],
      user: [],
      loggedUser: null
    }
  }

  async login(){
    const result = await auth().signInWithPopup(provider);
    this.setState({
      loggedUser: result.user
    });
  }

  async logout(){
    await auth().signOut();
    this.setState({
      loggedUser: null
    })
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
        <p>
          {this.state.loggedUser ? `Hi, ${this.state.loggedUser.displayName}!` : `Hi!`}
        </p>
        <button onClick={this.login.bind(this)}>Login with Google</button>
        <button onClick={this.logout.bind(this)}>Logout</button>

        <h1>Ini portofolio saya</h1>

        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/karyawan">Karyawan</Link></li>
          <li><Link to = "/upload">upload</Link></li>
        </ul>
        <div>
          <Route exact path = "/" component = {'Home'}/>
          <Route exact path = "/karyawan" component = {Karyawan}/>
          <Route exact path = "/upload" component = {Upload}/>
        </div>

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
