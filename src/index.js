import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./welcome/welcome";
import About from "./about us/about";
import Advantages from "./advantages/advantages";
import Services from "./services/services";
import Doctors from "./doctors/doctors";
import News from "./news/news";
import Pricelist from "./pricelist/pricelist";
import Footer from "./footer/footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <Header />
      <Welcome/>
      <About/>
      <Advantages/>
      <Services/>
      <Doctors/>
      <News/>
        <Pricelist/>
      <Footer/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
