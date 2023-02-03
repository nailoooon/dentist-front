import React, {useState} from 'react';
import DropDownHeader from "./DropDownHeader";

const DropDownPriceList = () => {

    const [state, setState] = useState([
        {name: "Терапевтические услуги", category: [
            {name: "Профессиональная чистка", services: [
                    {name: "Ультразвук", price: 15000},
                    {name: "Air Flow", price: 25000},
                ]},
            {name: "Лечение не осложненного кариеса", services: [
                    {name: "Поверхностный: пломба Filtec, Charisma (световая, Германия)", price: 16330},
                    {name: "Средний: пломба Filtec, Charisma(световая,Германия)", price: 18630},
                    {name: "Глубокий: пломба Filtec,Charisma(световая,Германия)", price: 18630},
                    {name: "Лечение клиновидного дефекта", price: 18630},
                ]},
                {name: "Лечение осложненного кариеса", services: [
                        {name: "Дефект пломбы ", price: 16100},
                        {name: "МТА", price: 3000},
                        {name: "I корневой зуб: пломба Filtec, Charisma(световая,Германия)", price: 31740},
                        {name: "II корневой зуб: пломба Filtec, Charisma(световая,Германия)\n", price: 34500},
                    ]},
            ]
        },
        {name: "Хирургическая стоматология", category: [
                {name: "Хирургическая стоматология", services: [
                        {name: "Консультация оформление первичной документации", price: 1000},
                        {name: "Убистезин, Артикаин", price: 4000},
                        {name: "Удаление", price: 12000},
                    ]},
            ]
        },
    ])

    return (
        <div>
            {state.map(obj => {
                return <DropDownHeader item={obj}/>
            })}
        </div>
    );
};

export default DropDownPriceList;