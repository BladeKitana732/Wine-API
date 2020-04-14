import React, { Component } from 'react';
import axios from 'axios';

//render wine data - completed in console 
//resource found: https://www.youtube.com/watch?v=12l6lkW6JhE&t=564s
//resource found: https://www.codota.com/code/javascript/functions/axios/create

//creating a api variable as base to be able to pull information from the separate objects in unison

let wineLink = axios.create({
    baseURL: "http://myapi-profstream.herokuapp.com/api/2f49a6/wines"
})


export default class Wines extends Component {


    constructor(props) {
        super(props);

        axios.get(wineLink)

        .then((result) => {
            let wines = result.data;

            console.log(wines)
        })


    }

    state = {
        
        wine: []

    }

    // componentDidMount() {

    //     axios.get(wineLink)
    
    //     .then((result) => {
    //         const wines = result.data;

    //         console.log(wines);
    
    //         this.setState({
    //             wine: result.data
    //         });
            
    //     })

    //     .catch((err) => {

    //         console.log('Error has been computed', err)
    
    //     });


    // }


    render() {
        return (
            <div>
             <h1>Wine Data Component</h1>

             <h2> { this.state.wine1 } </h2>
            </div>
        )
    }
}
