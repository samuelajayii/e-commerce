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
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/wishlist',
      element: <Wishlist />
    },
  ]
}])

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


