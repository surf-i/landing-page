import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Loading from './microcomponents/Loading';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurImpact from './pages/OurImpact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>  
            <Route exact path="/" element={<Home/>}/> 
            <Route exact path="/landing-page" element={<Navigate to="/"/>}/> 
            <Route exact path="/loading" element={<Loading/>}/>
            <Route exact path="/aboutus" element={<AboutUs/>}/>
            <Route exact path="/ourimpact" element={<OurImpact/>}/>
            <Route path="*"element={<NotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
