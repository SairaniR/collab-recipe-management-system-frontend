import React from 'react';
import './styles.css'; // Import your styles
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login'
import { createRoot } from 'react-dom/client';
import router from './router/index.jsx';
import { RouterProvider } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Login />
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
