// https://reactjsexample.com/lightweight-and-fully-customizable-carousel-component-for-react/

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Carousel } from 'react-responsive-carousel';
import React from "react";
import { Carousel } from "react-responsive-carousel";

import housingDataArray from './SampleData.json';

export default () => (
  <Carousel autoPlay>
   
      

            { housingDataArray.map((houseData, index) => (
                <div>
                    <a href={ houseData.listingLink }><img src={ houseData.houseImage }/></a>
                    <p className="legend">{houseData.price}</p>
                    <p className="legend">{houseData.address}</p>
                </div>
            ))}
            </Carousel>
        );
  
//ReactDOM.render(<DemoCarousel />, document.querySelector('Navbar'));

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

