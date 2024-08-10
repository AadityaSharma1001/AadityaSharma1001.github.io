import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Team from './Components/Team/Team';
import InitiativesPage from './Components/Initiatives/InitiativesPage';

const router = createBrowserRouter([
{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'team',
      element: <Team />,
    },
    {
      path: 'contact',
      element: <Contact />,
    },
    {
      path: 'initiatives',
      element: <InitiativesPage />,
    },

  ]
}
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
