import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Accordion from "../components/Accordion";
import { Snackbar, Alert, TextField, Button } from '@mui/material';

export default function FAQ() {
  const [faq, setFaq] = useState([]);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionRefs = useRef([]);

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/faq`)
      .then((response) => {
        setFaq(response.data.data.faqs);
      })
      .catch((error) => {
        setError(error);
        console.error("There was an error fetching the data", error);
      });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    message: ''
  })

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const handelChange = (e) => {
    const { value, name } = e.target
    setFormValue((priv) => ({ ...priv, [name]: value }))
  }

  const handelSubmit = async () => {
    console.log('valuueeeuue', formValue);

    const formData = new FormData();
    formData.append('name', formValue.name);
    formData.append('phone', formValue.phone);
    formData.append('email', formValue.email);
    formData.append('whatsapp', formValue.whatsapp);
    formData.append('message', formValue.message);

    try {
      const response = await axios.post(
        'https://iamanas.in/travel_bug/web_api/insert_contact_us',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data?.status === 1) {
        setSnackbarMessage(response.data.message || 'Subscribed successfully!');
        setSnackbarSeverity('success');
        setFormValue({
          name: '',
          email: '',
          phone: '',
          whatsapp: '',
          message: ''
        })
      } else {

        setSnackbarMessage(response.data.message || 'Invalid response.');
        setSnackbarSeverity('error');

      }

      // show success toast or UI update
    } catch (error) {
      console.log('error', error);
      // show error toast or UI update
      setSnackbarMessage('Something went wrong. Please try again.');
      setSnackbarSeverity('error');
    } finally {
      setOpenSnackbar(true);
    }
  };



  return (
    <>
      <div
        className="breadcumb-wrapper "
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">FAQs</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/#/">Home</a>
              </li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>{" "}
      <div className="space-top space-extra-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="title-area text-center">
                <h2
                  style={{
                    textAlign: "center",
                    fontFamily: "Libre Caslon",
                  }}
                >
                  Frequently Ask Questions
                </h2>
                <p
                  style={{
                    fontFamily: "Poppins",
                    color: "#4A4A4A",
                    fontSize: 20,
                  }}
                >
                  Have questions about your dream holiday to India? We have the
                  answers! Check out our FAQs about India tourism and our
                  holiday packages.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="accordion-area accordion mb-30">
                {faq &&
                  faq.map((item, index) => (
                    <Accordion
                      index={index}
                      key={index}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="elements-sec bg-white overflow-hidden">
        <div className="container-fluid">
          <div
            className="tags-container relative"
            style={{ marginBottom: "50px" }}
          ></div>
        </div>
      </div>{" "}
      <div
        className="bg-top-center space overflow-hidden"
        data-bg-src="assets/img/bg/tour_bg_3.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="">
                <div className="title-area text-center mb-30">
                  <span className="sub-title style1">Meet with Our Guide</span>
                  <h2 className="sec-title">Do You Have Any More Questions?</h2>
                </div>
                <div className="booking-form-container" style={{ maxWidth: '1100px', margin: '0 auto', marginTop: '20px', marginBottom: '20px',borderRadius:'10px', padding: '30px', background: 'white' }}>
                  <form


                  >
                    <h3 className="sec-title mb-30 text-capitalize">Book a Tour</h3>
                    <div className="row">
                      <div className="col-12 form-group position-relative">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="full_name"
                          placeholder="Full Name"
                          onChange={(e) => handelChange(e)}
                          value={formValue.name}
                        />
                        <img
                          src="assets/img/icon/user.svg"
                          alt="User Icon"
                          className="input-icon"
                        />
                      </div>


                      <div className="col-12 form-group position-relative">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email ID"
                          onChange={(e) => handelChange(e)}
                          value={formValue.email}


                        />
                        <img
                          src="assets/img/icon/mail.svg"
                          alt="Mail Icon"
                          className="input-icon"
                        />
                      </div>


                      <div className="col-12 form-group position-relative">
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                          onChange={(e) => handelChange(e)}
                          minLength={10}
                          value={formValue.phone}

                        />
                        <img
                          src="assets/img/icon/phone.svg"
                          alt="Phone Icon"
                          className="input-icon"

                        />
                      </div>

                      <div className="col-12 form-group position-relative">
                        <input
                          type="tel"
                          className="form-control"
                          name="whatsapp"
                          id="whatsapp"
                          placeholder="WhatsApp Number"
                          onChange={(e) => handelChange(e)}
                          maxLength={10}
                          value={formValue.whatsapp}


                        />
                        {/* <img
                            src="assets/img/icon/whatsapp.svg"
                            alt="WhatsApp Icon"
                            className="input-icon"
                          /> */}
                      </div>

                      <div className="form-group col-12 position-relative">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="4"
                          className="form-control"
                          placeholder="Your Message"
                          onChange={(e) => handelChange(e)}
                          value={formValue.message}


                        ></textarea>
                        <img
                          src="assets/img/icon/chat.svg"
                          alt="Chat Icon"
                          className="textarea-icon"
                        />
                      </div>

                      <div className="form-btn col-12 mt-24 text-center">
                        <button type="button" onClick={handelSubmit} className="th-btn style3">
                          Send Message
                          <img src="assets/img/icon/plane.svg" alt="Send Icon" />
                        </button>
                      </div>
                    </div>

                    <Snackbar
                      open={openSnackbar}
                      autoHideDuration={4000}
                      onClose={handleClose}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                      <Alert onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                      </Alert>
                    </Snackbar>

                    <p className="form-messages mb-0 mt-3"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
