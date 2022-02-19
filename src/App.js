import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './microcomponents/Loading';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route exact path="/" element={<Home/>}/> 
            <Route exact path="/loading" component={Loading}/>
            <Route component={NotFound}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
