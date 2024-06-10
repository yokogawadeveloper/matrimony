import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import BookData from "../MOCK_DATA.json";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <p className="mb-0 logonavbar">From Matrimony Group</p>
              {/* Uncomment and correct the image source if needed */}
              <img src="https://imgs.kannadamatrimony.com/bmimgs/kannadamatrimony-logo.png" alt="logo" class="img-fluid" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* Uncomment and adjust routes as needed */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/service">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li> */}
              </ul>
              <form className="d-flex">
                <Button className="btn btn-style" onClick={handleShow}>
                  Register Free
                </Button>
                <NavLink className="btn btn-style" to="/contact">
                  Login
                </NavLink>
                <div className="App">
                  <Search placeholder="Enter a Book Name..." data={BookData} />
                </div>
              </form>
            </div>
          </div>
        </nav>
      </section>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="mx-3">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label className="formlable">Add Profile Image <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Full Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Select Profile <span className="text-danger">*</span></label>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label formlable" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label class="form-check-label formlable" for="flexCheckChecked">
                      Checked checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label formlable" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label class="form-check-label formlable" for="flexCheckChecked">
                      Checked checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label formlable" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label class="form-check-label formlable" for="flexCheckChecked">
                      Checked checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label class="form-check-label formlable" for="flexCheckChecked">
                      Checked checkbox
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Gender <span className="text-danger">*</span></label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlable" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Phone Number <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Email Address <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Date of Birth <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="date" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Birth Time <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Religion <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Mother Tongue <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Cast <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Gothram <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Dhosham <span className="text-danger">*</span></label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlable" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Rashi <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Nakshatra <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Married Status <span className="text-danger">*</span></label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlable" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Hight <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Father Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Mother Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Family Status <span className="text-danger">*</span></label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlable" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Family Type <span className="text-danger">*</span></label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlable" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Family Values <span className="text-danger">*</span></label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlable" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Any Disability <span className="text-danger">*</span></label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlable" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Highest Education <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Employed In <span className="text-danger">*</span></label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlable" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlable" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlable" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label formlable" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Occupation <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Annual Income <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="formlable">Address <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="time" placeholder="full name" />
                </Form.Group>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <Button variant="primary" className="mx-2">Submit</Button>
            <Button variant="danger" onClick={handleClose}>Cancel</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar;
