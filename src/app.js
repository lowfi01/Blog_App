import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

// Normalization & SCSS Setup
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import configureStore from './store/configureStore';

// import {firebase, googleAuthProvider} from './firebase/firebase';
import AppRouter, { history } from './routers/AppRouter';
// import { login, logout } from './actions/auth';
import {startsetBlogPosts} from './actions/blog';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

// Generic JSX
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

// Render our Application
// let hasRendered = false; // ensure that our application only loads once
// const renderApp = () => {
//   if(!hasRendered) {
//     ReactDom.render(jsx, document.getElementById('app')); // render the application
//     hasRendered = true; // application is now rendered, don't render again
//   }
// }

// Loading Page  -- will not run if above code is executed.
ReactDom.render(<LoadingPage />, document.getElementById('app'));

store.dispatch(startsetBlogPosts()).then(() => {
  ReactDom.render(jsx, document.getElementById('app'));
});

// Logic will always run, so do not worry
// firebase.auth().onAuthStateChanged((user) => { // implement firebase googleAuthProvider
//   if (user) {
//     store.dispatch(login(user.uid));
//     renderApp();
//       if (history.location.pathname === '/') { // lets check if the user is logging in before moving them :D
//         history.push('/dashboard'); // redirect user to dashboard
//       }
//     // // Code Exmple.. we fetch the data from the database before moving user
//     // store.dispatch(startSetExpenses()).then(() => {
//     //   renderApp();
//     //   if (history.location.pathname === '/') { // lets check if the user is logging in before moving them :D
//     //     history.push('/dashboard'); // redirect user to dashboard
//     //   }
//     // });
//   } else {
//     store.dispatch(logout());
//     // Run code when user is logged out
//     renderApp(); // render applicaiton to prevent loading screen from running forever
//     history.push('/'); // redirect user to login
//   }
// });
