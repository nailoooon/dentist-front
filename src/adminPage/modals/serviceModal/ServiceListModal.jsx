import React from 'react';
import DropDownHeader from "../../../pricelist/dropdownPriceList/DropDownHeader";
import SectorServiceModal from "./SectorServiceModal";

const ServiceListModal = ({services, toggle}) => {
    return (
        services.length ? <div>
        {services.map(obj => {
            return <SectorServiceModal key={obj._id} item={obj} pToggle={toggle}/>
        })}
        </div> :
                <div style={{textAlign: 'center', color: 'red', fontSize: '18px'}}>Нет услуг</div>

    );
};

export default ServiceListModal;