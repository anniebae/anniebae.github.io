var React = require('react');
var ReactDOM = require('react-dom');

import Styles from '../css'
import Home from './components/Home';

// const styles = {
//   slideshow: { 
//     position: 'relative', 
//     width: '740px', 
//     height: '557px'
//   },
//   img: { 
//     position: 'relative', 
//     top: '0px', 
//     left: '0px',
//     zIndex: 4, 
//     opacity: 0, 
//     width: '740px', 
//     height: '557px' 
//   }
// }

ReactDOM.render(
	<Home />,
	document.getElementById('app')
)