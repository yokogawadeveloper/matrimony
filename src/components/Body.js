import React, { useState } from 'react'
import workapi from './API/workApi.js';
import './Search.css'
const Body = () => {

    const [workData, setWorkData] = useState(workapi);
    const headingStyle = {
        borderRight: '1px solid #d4c9c9'
    };
    return (
        <>
        <div className='bordersection '></div>
            <section className='container-fluid py-5'>
                <div className='row mx-3'>
                    <div className='col-md-4'>
                        <div class="product_card">
                            <div class="add_to_wishlist">
                                <i class="far fa-heart"></i>
                            </div>
                            <div class="image pt-3 px-3">
                                <img src={`${process.env.PUBLIC_URL}/image/images3.jpeg`} alt=""/>
                            </div>
                            <div class="product_info">
                                <h2 class="product_name text-center">
                                    Sajid & Sonal
                                </h2>
                                <p class="product_description text-center px-2">
                                marriage Planning is in progress and a big thank you to Shaadi.com both 
                                of us as we have found our better half /soul mates 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="product_card">
                            <div class="add_to_wishlist">
                                <i class="far fa-heart"></i>
                            </div>
                            <div class="image pt-3 px-3">
                                <img src={`${process.env.PUBLIC_URL}/image/images2.jpeg`} alt=""/>
                            </div>
                            <div class="product_info">
                                <h2 class="product_name text-center">
                                    Sajid & Sonal
                                </h2>
                                <p class="product_description text-center px-2">
                                marriage Planning is in progress and a big thank you to Shaadi.com both 
                                of us as we have found our better half /soul mates 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="product_card">
                            <div class="add_to_wishlist">
                                <i class="far fa-heart"></i>
                            </div>
                            <div class="image pt-3 px-3">
                                <img src={`${process.env.PUBLIC_URL}/image/images3.jpeg`} alt=""/>
                            </div>
                            <div class="product_info">
                                <h2 class="product_name text-center">
                                    Sajid & Sonal
                                </h2>
                                <p class="product_description text-center px-2">
                                marriage Planning is in progress and a big thank you to Shaadi.com both 
                                of us as we have found our better half /soul mates 
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Body;
