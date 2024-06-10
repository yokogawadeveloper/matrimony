import React, { useState } from 'react';
import { howToUse, Connect, AIdriven } from './API/howToUse.js';

const Aboutus = () => {
    const [aboutData, setAboutData] = useState(howToUse);
    const [connectData, setConnectData] = useState(Connect);
    const [drivenData, setdrivenData] = useState(AIdriven);

    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/relevant-filters-img-new.png" alt="aboutusImg" />
                        </div>

                        {/*---1Section right side data-----*/}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h1 className="main-heading">Choose by Interests, Location and other relevant filters</h1>

                            {aboutData.map((curElem) => {
                                const { id, title, info } = curElem;
                                return (
                                    <div className="row our-services-info" key={id}>
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">{info}</p>
                                        </div>
                                    </div>
                                );
                            })}

                            <br />
                            <button className="btn-style btn-style-border">Know more</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* -----------2nd part of about section----------*/}
            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">
                        {/*---1Section right side data-----*/}
                        <div className="col-12 col-lg-6 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                            <h1 className="main-heading">Connect with matches the way you like</h1>

                            {connectData.map((curElem) => {
                                const { id, title, info } = curElem;
                                return (
                                    <div className="row our-services-info" key={id}>
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">{info}</p>
                                        </div>
                                    </div>
                                );
                            })}

                            <br />
                            <button className="btn-style btn-style-border">Learn more</button>
                        </div>

                        {/*-----images section-------- */}
                        <div className="col-12 col-lg-6 our-services-rightside-img1">
                            <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-img.png" alt="details" />
                        </div>
                    </div>
                </div>
            </section>
             {/* -----------3nd part of about section----------*/}
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/ai-driven-img.png" alt="aboutusImg1" />
                        </div>

                        {/*---1Section right side data-----*/}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h1 className="main-heading">AI-driven match recommendations to suit your preferences</h1>

                            {drivenData.map((curElem) => {
                                const { id, title, info } = curElem;
                                return (
                                    <div className="row our-services-info" key={id}>
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">{info}</p>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* <br />
                            <button className="btn-style btn-style-border">Know more</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Aboutus;
