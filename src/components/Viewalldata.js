import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { baseUrl } from "./API/scroll";

const Viewalldata = () => {
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <section className='container formsection mb-4'>
                <h1 className="main-heading text-center">Millions have found their life partner at KannadaMatrimony!</h1>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <img src={baseUrl + "abstract01"} alt="Arjun and Arathi" />
                        </div>
                        <div>
                            <img src={baseUrl + "https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/ss-images/mahesh-and-suhasini-aug-2023.jpg"} alt="Mahesh and Suhasini" />
                        </div>
                        <div>
                            <img src={baseUrl + "https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/ss-images/mahesh-and-anusha-aug-2023.jpg"} alt="Mahesh and Anusha" />
                        </div>
                        <div>
                            <img src={baseUrl + "https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/ss-images/anusha-and-vishal-aug-2023.jpg"} alt="Anusha and Vishal" />
                        </div>
                        <div>
                            <img src={baseUrl + "https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/ss-images/nithin-and-vidyashree-aug-2023.jpg"} alt="Nithin and Vidyashree" />
                        </div>
                        <div>
                            <img src={baseUrl + "https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/ss-images/shreevathsa-and-mahalakshmi-aug-2023.jpg"} alt="Shreevathsa and Mahalakshmi" />
                        </div>
                    </Slider>
                </div>
            </section>
            <section className='container  my-4'>
                <div className='formsection'>
                    <h1 className="main-heading text-center pt-3">Start your search for a perfect match at Kannada Matrimony</h1>
                    <form>
                        <div className="row px-5 py-4">
                            <div className="col-12 col-lg-4">
                                <label for="exampleFormControlInput1" class="form-label formlable">I'm Looking For a</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Men</option>
                                    <option value="2">Women</option>
                                </select>

                            </div>
                            <div className="col-12 col-lg-4">
                                <label for="exampleFormControlInput1" class="form-label formlable">From Age</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Men</option>
                                    <option value="2">Women</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-4">
                                <label for="exampleFormControlInput1" class="form-label formlable">To Age</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Men</option>
                                    <option value="2">Women</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-6 pt-3">
                                <label for="exampleFormControlInput1" class="form-label formlable">Religion</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Men</option>
                                    <option value="2">Women</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-6 pt-3">
                                <label for="exampleFormControlInput1" class="form-label formlable">Caste</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Men</option>
                                    <option value="2">Women</option>
                                </select>
                            </div >
                           <div className='col-12 text-center py-4'>
                           <button className='btn btn-primary fs-3'>Let's Begin</button>
                           </div>
                        </div>
                    </form>
                </div>

            </section>
        </>
    );
}

export default Viewalldata;
