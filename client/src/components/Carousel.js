// https://reactjsexample.com/lightweight-and-fully-customizable-carousel-component-for-react/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import housingDataArray from './SampleData.json';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>

            { housingDataArray.map((houseData, index) => (
                <div>
                    <img src={ houseData.listingLink }/>
                    <p className="legend">{hous}</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
});

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

