import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Intro from './Intro';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Home from './Home';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/',
      element: <Intro />
    },
    {
      path: '/login',
      element: <LogIn />
    },
    {
      path: '/home',
      element: <Home />
    },
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


