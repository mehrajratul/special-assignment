import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch("./products.json")
        .then(res => res.json())
        .then(data =>setServices(data));
    })
    return (
        <div className='Home'>
                {
                    services.map(service => <Service key = {service.key} service={service}></Service>)
                }
        </div>
    );
};

export default Services;