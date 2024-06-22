import React, { useState } from 'react';
import { serviceapi, service2 } from "./API/serviceApi.js";
const Services = () => {
    const [serviceData, setServiceData] = useState(serviceapi);
    const [service2Data, setService2Data] = useState(service2);
    return (
        <>
         <div className='bordersection'></div>
            <section className="service-main-container pt-0">
                <div className="container service-container">
                    <div className='row'>
                        <h1 className='main-heading text-center text-white py-2'>Find your Special Someone</h1>
                        <div className='col-md-4'>
                           <div className='text-center'>
                            <div className='d-flex align-items-center justify-content-center'>
                            <span className='serviceicon'>
                                <img src={`${process.env.PUBLIC_URL}/image/signup.svg`} alt='' className='rounded-circle'/>
                            </span>
                            </div>
                            <h2 class="product_name text-center pt-4">Sign up</h2>
                            <p class="product_descriptions text-center px-2">
                                Register for free & put up your Matrimony profie
                            </p>
                            
                           </div>
                        </div>
                        <div className='col-md-4'>
                           <div className='text-center'>
                            <div className='d-flex align-items-center justify-content-center'>
                           <span className='serviceicon'>
                                <img src={`${process.env.PUBLIC_URL}/image/signup.svg`} alt='' className='rounded-circle'/>
                            </span>
                            </div>
                            <h2 class="product_name text-center pt-4">Connect</h2>
                            <p class="product_descriptions text-center px-2">
                            Select & Connect with Matches younlike
                            </p>
                           </div>
                        </div>
                        <div className='col-md-4'>
                           <div className='text-center'>
                          <div className='d-flex align-items-center justify-content-center'>
                          <span className='serviceicon'>
                                <img src={`${process.env.PUBLIC_URL}/image/signup.svg`} alt='' className='rounded-circle'/>
                            </span>
                          </div>
                            <h2 class="product_name text-center pt-4">Interact</h2>
                            <p class="product_descriptions text-center px-2">
                            Become a premium member & Start a conversation
                            </p>
                           </div>
                        </div>
                        
                    </div>
                </div>
            </section>


        </>
    );
};

export default Services;
