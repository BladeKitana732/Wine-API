import React, { Component } from 'react';
import axios from 'axios';

//render wine data - completed in console 
//resource found: https://www.youtube.com/watch?v=12l6lkW6JhE&t=564s - regarding the axios.create()
//resource found: https://www.codota.com/code/javascript/functions/axios/create

//creating a api variable as base to be able to pull information from the separate objects in unison

let wineLink = axios.create({
    baseURL: "http://myapi-profstream.herokuapp.com/api/2f49a6/wines"
})


export default class Wines extends Component {

    state = {
        
        wine: []

    }


    constructor(props) {
        super(props);
        //this .get method will always pull from api url from wineLink variable and the parameter of ('/') to reference the main path (main API url information)
        // wineLink.get('/')

        // .then((result) => {
        //     let wines = result.data;

        //     console.log(wines)

        //     this.setState({
        //         wine: wines
        //     })
        // })
        this.moreInfo();

    }

    //creating method to pull more details about wine when image is clicked 

    //resource: http://myapi-profstream.herokuapp.com/docs/wine 
    
    moreInfo = async () => {
        let wines = await wineLink.get('/')

        .then(({ data }) => data );
        
        console.log(wines);

        this.setState({

           wine: wines

        })

    }
    


    //create wine post method 

    // createWine = async () => {
    //     let newWine = await wineLink.post('/')}    
   
   
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
            
             {/* needed to set a key value to iterate through each unique id to pull names of each wine in data */}
            
            { this.state.wine.map(details => 
                
                
                <h2> { details.name } <p>{ details.description }</p>
                
                <img src= { details.picture } alt= ' ' onClick= { this.moreInfo.bind(this) } />

                </h2>
                
            )}
         


            </div>

        )
    }
}
