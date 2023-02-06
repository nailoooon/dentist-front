import React from 'react';
import Header from "../header/header";
import Welcome from "../welcome/welcome";
import About from "../about us/about";
import Advantages from "../advantages/advantages";
import Services from "../services/services";
import Doctors from "../doctors/doctors";
import News from "../news/news";
import MyMap from "../yandex_map/myMap";
import Footer from "../footer/footer";

const MainPage = () => {
    return (
        <div>
            <Header />
            <Welcome/>
            <About/>
            <Advantages/>
            <Services/>
            <Doctors/>
            <News/>
            <MyMap/>
            <Footer/>
        </div>
    );
};

export default MainPage;