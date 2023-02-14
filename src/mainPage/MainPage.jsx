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
    const [selectedDentistry, setSelectedDentistry] = useState(null)

    useEffect(() => {
        const apiUrl = SERVER_NAME + 'dentistry'
        axios.get(apiUrl, CONFIG).then(res => {
            const data = res.data
            const filterData = data.filter(d => d.address)
            setDentistry(filterData)
            setSelectedDentistry(filterData[0])
        })
    }, [setDentistry])

    console.log(selectedDentistry)

    const [news, setNews] = useState([]);

    useEffect(() => {
        const apiUrl = SERVER_NAME + "news";
        axios.get(apiUrl, CONFIG).then((resp) => {
            const allNews = resp.data;
            setNews(allNews);
        });
    }, [setNews]);

    const handleSelectDentistry = (index) => {
        console.log(index)
        setSelectedDentistry(dentistry[index])
    }

    return (
        <div>
            <Header dentistry={dentistry} handleSelectedDentistry={handleSelectDentistry}/>
            <Welcome/>
            <About/>
            <Advantages/>
            <Services selectedDentistry={selectedDentistry}/>
            <Doctors selectedDentistry={selectedDentistry}/>
            <News news={news}/>
            <MyMap selectedDentistry={selectedDentistry}/>
            <Footer selectedDentistry={selectedDentistry}/>
        </div>
    );
};

export default MainPage;