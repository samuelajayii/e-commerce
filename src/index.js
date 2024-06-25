import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Intro from './Intro';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from './context/cart'
import { WishListProvider } from './context/wishlist';
import Wishlist from './Wishlist';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Checkout from './Checkout';

const router = createBrowserRouter([{
  errorElement: <Error />,
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
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/wishlist',
      element: <Wishlist />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/checkout',
      element: <Checkout />
    },
  ]
},])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <WishListProvider>
        <RouterProvider router={router} />
      </WishListProvider>
    </CartProvider>
  </React.StrictMode>
);


