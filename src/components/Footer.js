import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 mx-auto">
                            
                            <div className="row">
                                <div className='col-lg-3'></div>
                                <div className='col-lg-9 mb-2'>
                                <div className='d-flex'><h3 className='text-light'>SWmatrimony.com</h3></div>
                                <div className='d-flex'><h3 className='text-light'>Email ID:</h3><p className='mb-1 main-hero-para text-light ms-2'> anchepedhematrimony@gmail.com</p></div>
                                <div className='d-flex'><h3 className='text-light'>Contact Number:</h3> <p className='mb-1 main-hero-para text-light ms-2'> 7619331333, 7619332333</p></div>
                                <div className='d-flex'><h3 className='text-light'>address: </h3> <p className='mb-1 main-hero-para text-light w-100 ms-2'> #165, FIRST FLOOR,VASUNDHARA LAYOUT KAMMASANDRA,SAMPIGE NAGAR
                                BANGALORE560100</p></div>
                                </div>
                                
                                <div className="col-6 col-lg-3 mt-2">
                                   <div>
                                   <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="" style={{width: "100%"}}/>
                                   </div>
                                   <h3 className="text-light mx-3 mt-2">SWmatrimony.com</h3>
                                   
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h3 className='text-light'>Need Help?</h3>
                                    <ul className='px-0'>
                                        <li>
                                            <NavLink to="/">Member Login</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">Sign Up</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">Partner Search</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">How to Use Shaadi.com </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">Premium Memberships </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">Customer Support</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">Site Map</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                <div className='d-flex align-items-center'><h3 className='text-light'>Contact Number: <p className='mb-1 main-hero-para text-light'>7619331333, 7619332333</p></h3></div>
                                    <h3 className='text-light'>Company</h3>
                                    <ul className='px-0'>
                                        <li>
                                            <NavLink to="/">About Us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/"> Shaadi Blog</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">Careers</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">Awards & Recognition </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">Cov-Aid</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">Contact Us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-6 col-lg-3'>
                                    <h3 className='text-light'> Privacy & You</h3>
                                    <ul className='px-0'>
                                        <li>
                                            <NavLink to="/">Terms of Use</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">Privacy Policy</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">Be Safe Online</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">Report Misuse</NavLink>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <hr />
                            <div className="mt-5 row">
                             <div className='col-sm-12 col-lg-6'>
                             <p className="main-hero-para text-light w-100">
                             Address: #165, FIRST FLOOR,VASUNDHARA LAYOUT KAMMASANDRA,SAMPIGE NAGAR BANGALORE560100
                             </p>
                             <p className="main-hero-para w-100">copyright © 2024. All rights reserved.</p>
                             </div>
                             <div className='col-sm-12 col-lg-3'>
                              <p className='mb-0 main-hero-para text-light'>SWmatrimony.com</p>
                             </div>
                             <div className='col-sm-12 col-lg-3'>
                             <h3 className='text-light'>Follow Us</h3>
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <NavLink to="/">
                                                <i className="fab fa-instagram fontawesome-style"></i>
                                            </NavLink>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <NavLink to="/">
                                                <i className="fab fa-facebook fontawesome-style"></i>
                                            </NavLink>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <NavLink NavLink to="/">
                                                <i className="fab fa-youtube fontawesome-style"></i>
                                            </NavLink>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <NavLink to="/">
                                                <i className="fab fa-twitter fontawesome-style"></i>
                                            </NavLink>
                                        </div>
                                    </div>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
