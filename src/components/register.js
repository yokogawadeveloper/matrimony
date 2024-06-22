import React from 'react';
import './register.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

const Register = ({ isOpen, onClose }) => {
    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
      <div className="modal-overlay" onClick={handleBackdropClick}>
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
          <h2>Register</h2>
          <form className="mx-3">
            <div className="row modalheight">
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
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label formlablecheck" for="flexCheckDefault">
                    My self
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label formlablecheck" for="flexCheckChecked">
                    Daughter
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label formlablecheck" for="flexCheckDefault">
                    Son
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label formlablecheck" for="flexCheckChecked">
                    Sister
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label formlablecheck" for="flexCheckDefault">
                    Brother
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label formlablecheck" for="flexCheckChecked">
                    Relative
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                    <label class="form-check-label formlablecheck" for="flexCheckChecked">
                    Friend
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Gender <span className="text-danger">*</span></label>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault1">
                    Male
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Female
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
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault1">
                    Yes
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    No
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    I don't know
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
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault1">
                    Never Married
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Widowed
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Divorced
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Waiting for Divorced
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
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault1">
                    Middle class
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Upper Middle class
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    High class
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Rich/Affluent
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Family Type <span className="text-danger">*</span></label>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault1">
                    Joint
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Independent
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Family Values <span className="text-danger">*</span></label>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault1">
                    Orthodox
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Traditional
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Moderate
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Liberal
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <label className="formlable">Any Disability <span className="text-danger">*</span></label>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault1">
                     NO
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Physically Challanged
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
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault1">
                    Governament
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Private
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault1">
                    Business
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Defence
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault1">
                    Self Employed
                    </label>
                  </div>
                  <div class="form-check mx-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label formlablecheck" for="flexRadioDefault2">
                    Not Working
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
            <div className="d-flex justify-content-center py-3">
            <Button variant="primary" className="mx-2 fs-4">Submit</Button>
            <Button variant="danger" className="fs-4">Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Register;