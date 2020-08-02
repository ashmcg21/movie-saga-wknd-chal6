
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieList.css';

class MoviesList extends Component {


    render() {
    
        const moviesListArray = this.props.store.moviesReducer.map((item, index) => {
            return (
                <div className="movieItem">
                    <img src={item.poster} />
                    <h4>{item.title}</h4>
                </div>
            )
        })
        
        return (
        <div>{moviesListArray}</div>
        )
    }
}



const mapStoreToProps = (store) => ({store});


export default connect(mapStoreToProps)(MoviesList);