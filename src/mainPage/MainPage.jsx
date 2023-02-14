import React, {useEffect, useState} from 'react';
import Header from "../header/header";
import Welcome from "../welcome/welcome";
import About from "../about us/about";
import Advantages from "../advantages/advantages";
import Services from "../services/services";
import Doctors from "../doctors/doctors";
import News from "../news/news";
import MyMap from "../yandex_map/myMap";
import Footer from "../footer/footer";
import {CONFIG, SERVER_NAME} from "../API/Constants";
import axios from "axios";

const MainPage = () => {

    const [dentistry, setDentistry] = useState([])

    useEffect(() => {
        const apiUrl = SERVER_NAME + 'dentistry'
        axios.get(apiUrl, CONFIG).then(res => {
            const data = res.data
            setDentistry(data.filter(d => d.address))
        })
    }, [setDentistry])

    return (
        <div>
            <Header dentistry={dentistry}/>
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