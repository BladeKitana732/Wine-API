import React, { Component } from 'react';
import axios from 'axios';

//render wine data 


export default class Wines extends Component {

    state = {
        
        wine: []

    }

    componentDidMount() {
        
        let wineLink = "http://myapi-profstream.herokuapp.com/api/2f49a6/wines";

        axios.get(wineLink)
    
        .then((result) => {
            const wines = result.data;


    
            console.log(wines[0]);
    
            this.setState({
                wine1: wines[0]
            });
            
        })

        .catch((err) => {

            console.log('Error has been computed', err)
    
        });


    }


    render() {
        return (
            <div>
             <h1>Wine Data Component</h1>

             <h2> { this.state.wine1 } </h2>
            </div>
        )
    }
}
