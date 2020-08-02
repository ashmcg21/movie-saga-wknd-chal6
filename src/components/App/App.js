import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import MoviesList from '../../MoviesList/MoviesList';

class App extends Component {

  componentDidMount() {
    this.props.dispatch({type: "GET_MOVIES" });
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>MOVIES</p>
        <MoviesList />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({store});

export default connect(mapStoreToProps)(App);
