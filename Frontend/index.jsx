import React from 'react';
import ReactDOM from 'react-dom';
// import * as UtilTest from './utils/session_api_util';
// import configureStore from './store/store';
// import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  // let store;
  // if (window.currentUser) {
  //     const preloadedState = {
  //         session: { currentUser: window.currentUser }
  //     };
  //     store = configureStore(preloadedState);
  //     delete window.currentUser;
  // } else {
  //     store = configureStore();
  // }
  // window.fetchPlaylists = fetchPlaylists;
  // window.getState = store.getState;
  // window.fetchPlaylists = fetchPlaylists;
  // window.logout = UtilTest.logout;
  // window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<h1> hello </h1>, root);
});