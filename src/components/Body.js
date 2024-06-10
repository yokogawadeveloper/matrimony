import React, { useState } from 'react'
import workapi from './API/workApi.js';
const Body = () => {

    const [workData, setWorkData] = useState(workapi);
    const headingStyle = {
        borderRight:'1px solid #d4c9c9'
      };
    return (
        <>
            <section>
                <div className="work-container container">
                    {/* <h1 className="main-heading text-center">How does it work</h1> */}
                    <div className="row">
                        {
                            workData.map((curElem ) => {
                                const{id, logo, title, info} =curElem;
                                return (
                                    <>
                                        <div className="col-12 col-lg-4 text-center work-container-subdiv" key={id}>
                                            <img className='py-3' src={logo} alt='log'/>
                                            <h2 className="sub-heading">{title}</h2>
                                            <p className="main-hero-para w-100">{info}</p>
                                        </div>
                                    </>
                                );
                            })
                        }

                    </div>
                    <div className="col-12 col-lg-12  mt-4">
                                           <div className='text-center work-container-subdiv mx-5 d-flex align-items-center justify-content-between'>
                                           <img className='py-3' src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/limca-records-img-new.png" alt='log' style={headingStyle}/>
                                          
                                          <p className="main-hero-para w-100">Featured in the Limca Book of Records for highest number of documented marriages online</p>
                                           </div>
                                        </div>
                </div>
            </section>
        </>
    );
};

export default Body;
