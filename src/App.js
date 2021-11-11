import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
//import {BrowserRouter as Routes} from 'react-router';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Ebook from './component/Ebook/Ebook';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Student from './component/Student/Student';
import Teachers from './component/Teachers/Teachers';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/home' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/student' exact component={Student}/>
          <Route path='/teacher' exact component={Teachers}/>
          <Route path='/ebooks' exact component={Ebook}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/*' exact component={NotFound}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
