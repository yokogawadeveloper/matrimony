import React, { useState } from 'react';
import {serviceapi, service2} from "./API/serviceApi.js";
const Services = () => {
    const [serviceData, setServiceData] = useState(serviceapi);
    const [service2Data, setService2Data] = useState(service2);
    return (
        <>
            <section className="service-main-container pt-0">
                <div className="container service-container">
                    <div className="row">
                        {serviceData.map((curElem) => {
                            console.log(curElem)
                            const { id, logo, heading, title, info, img } = curElem;
                            return (
                                <>
                                    <div className="col-12 col-lg-6 col-xxl-6 work-container-subdiv" key={id}>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <h1>{heading}</h1>
                                            <img src={logo} alt='imgheading' />
                                        </div>
                                        <h2 className="sub-heading">{title}</h2>
                                        {info.split('*').filter(item => item.trim() !== '').map((item, index) => (
                                            <p className='my-0 main-hero-para w-100' key={index}>
                                                {index + 1}. {item}
                                            </p>
                                        ))}
                                        <div className='text-start'>
                                        {id === 1 && <button className='btn btn-primary mt-4'>Get Invited</button>}
                                        {id === 2 && <button className='btn btn-primary my-3'>Know more</button>}
                                        </div>
                                    </div>
                                </>
                            );
                        })}

                    </div>
                </div>
            </section>
            <section className="container my-3">
                <div className="card p-5">
                    <h1 className='py-3'>Our wedding services</h1>
                    <div className="row">
                        {service2Data.map((curElem) => {
                            console.log(curElem)
                            const {id,img } = curElem;
                            return (
                                <>
                                    <div className="col-12 col-lg-6 col-xxl-6 " key={id}>
                                        <img src={img} alt="logo.id" className='w-100'/>
                                    </div>
                                </>
                            );
                        })}

                    </div>
                </div>
            </section>

        </>
    );
};

export default Services;
