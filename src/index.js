import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
import './index.css';  
import 'typeface-roboto'; 
import registerServiceWorker from './registerServiceWorker';
import Home from './screens/home/Home'

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
>>>>>>> cd5579c24489409039956c0b64ed3147a97397bc
