import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//css
import 'semantic-ui-css/semantic.min.css'

// third 
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom'

//redux
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './redux/reducers/RootReducer'
import {refresh} from './redux/actions/UserAction'



// redux setup
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))



if(!!localStorage.getItem('jwtToken')){
   store.dispatch(refresh())
}




axios.defaults.headers.common.Authorization =`Bearer ${localStorage.getItem("jwtToken")}` ;

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

serviceWorker.unregister();
