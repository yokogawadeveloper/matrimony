import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import faqdata from './API/faq'; // Corrected import

const FAQ = () => {
  const [faqData, setFaqData] = useState(faqdata); // Corrected variable name

  return (
    <>
      <section className="service-main-container">
        <div className="container service-container card">
          <div className='d-flex'>
            <img src='https://imgs.kannadamatrimony.com/bmimgs/homepage-revamp-images/frequently-img-new.svg' alt='logofaq' />
            <h1 className="main-heading fw-bold mx-4">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="row mx-3 pb-5">
            <div className='col-md-12'>
              <Accordion>
                {faqData.map((curElem) => {
                  const { id, title, info } = curElem;
                  return (
                    <Accordion.Item eventKey={id} key={id}>
                      <Accordion.Header className='faqheading'>{title}</Accordion.Header>
                      <Accordion.Body>
                        {info.split('*').filter(item => item.trim() !== '').map((item, index) => (
                          <p className='my-0 main-hero-para w-100' key={index}>
                            {index + 1}. {item}
                          </p>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
