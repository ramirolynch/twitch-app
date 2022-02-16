import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {SearchPage} from './Components/SearchPage';
import { FavoritesPage } from './Components/FavoritesPage';
import { StreamContextProvider } from './Context/StreamsContextProvider';
import { TrendingPage } from './Components/TrendingPage';
import { TopGames } from './Components/TopGames';


ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
      <Routes>
        <Route path='/' element={<SearchPage/>}/>
        <Route path='/Favorites' element={<FavoritesPage/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
        
      </Routes>
    </BrowserRouter>
=======
    <StreamContextProvider>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path='/' element={<TrendingPage/>}/>
          <Route path='/TopGames' element={<TopGames/>}/>
          <Route path='/Search' element={<SearchPage/>}/>
          <Route path='/Favorites' element={<FavoritesPage/>}/>
          <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </StreamContextProvider>
>>>>>>> 2db6a72a260651e5b91d1d71b54c4e36983ed9e2
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
