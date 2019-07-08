import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Card';
import Signin from './components/Signin';
import Register from './components/Register';
// import Carousel from './components/Carousel'
import './App.css';

function App() {
  return (
    <div className="App">


        <Navbar />
        {/* <Carousel /> */}
        <Signin />
        <Register />
        <Cards />


    </div>
  );

}
// function  App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;



// import React, {Component} from 'react';
// // import logo from './logo.svg';
// import './App.css';

// import Navbar from "./components/Navbar/Navbar.js";
// import 'bootstrap/dist/css/bootstrap.min.css';


// class App extends Component {
//   render() {
//     return(
//       <div>
//         <Navbar />
//       </div>
//     );
//   }
// }
// function  App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
