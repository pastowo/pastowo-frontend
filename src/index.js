import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import WebFont from 'webfontloader';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faBookmark,
  faEllipsisH,
  faTags,
  faThumbsUp,
  faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import {
  faBookmark as farBookmark,
  faThumbsUp as farThumbsUp,
  faThumbsDown as farThumbsDown
} from '@fortawesome/free-regular-svg-icons'


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import postsReducer from './storage/reducers/posts';


library.add(
  fab,
  faBookmark,
  farBookmark,
  faEllipsisH,
  faTags,
  faThumbsUp,
  faThumbsDown,
  farThumbsUp,
  farThumbsDown );

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
	posts: postsReducer
})

const store = createStore(
  rootReducer,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
