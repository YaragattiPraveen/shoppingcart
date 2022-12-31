import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={Store}>
    <Navbar/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </Provider>
  </BrowserRouter>
  </React.StrictMode>
);
