import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Product from './components/Product';
import Resume from './pages/Resume';
const root = ReactDOM.createRoot(document.getElementById('root'));


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout>
      <Home />
    </Layout>,
  },
  {
    path: "/About",
    element: <Layout>
      <About />
    </Layout>,
  },
  {
    path: "/Contact",
    element: <Layout>
      <Contact />
    </Layout>,
  },
  {
    path: "/Gallery",
    element: <Layout>
      <Gallery />
    </Layout>,
  },
  {
    path: "/Product",
    element: <Layout>
      <Product />
    </Layout>,
  },
  {
    path: "/resume",
    element: <Resume />
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
