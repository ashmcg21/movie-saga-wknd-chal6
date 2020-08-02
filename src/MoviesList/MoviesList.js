
import React, { Component } from 'react';
import { connect } from 'react-redux';


class MoviesList extends Component {


    render() {
    
        const moviesListArray = this.props.store.moviesReducer.map((item, index) => {
            return (
                <div>
                    <img src={item.poster} />
                    <h4>{item.title}</h4>
                </div>
            )
        })
        
        return (
            <div></div>
        )
    }
}



const mapStoreToProps = (store) => ({store});


export default connect(mapStoreToProps)(MoviesList);