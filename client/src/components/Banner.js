
import React from "react";
import banner from './images/bannerimg.jpg'
import keys from './images/keys.jpg'
import handshake from './images/handshake.jpg'



const imageContainer = {
    position: 'relative',
}
const imgStyle = {
     marginTop: '1vh',
     height: '20vw',
     width: '30vw',
     display: 'inline-block'
}

const floatText = {
        color: 'white',
        position: 'absolute',
        zIndex: '999',
        marginTop: '0',
        marginBottom: '0',
        left: '0',
        right: '0',
        top: '40%', /* Adjust this value to move the positioned div up and down */
        textAlign: 'center',
        width: '100%', /* Set the width of the positioned div */
        textShadow: '2px 2px rgba(33,33,33, 0.33)',
}


 export default function Banner () {
     return (
   
        <div style={imageContainer}>
            <div>
                <img style={imgStyle} alt={''} src={banner}/>
                <img style={imgStyle} alt={''} src={handshake}/>
                <img style={imgStyle} alt={''} src={keys}/>
                               
            </div>
            <div style={floatText}>
                <h1>Bringing Property Right To Your Fingertips!</h1>
            </div>
        </div>
 

 
 );
}


 
