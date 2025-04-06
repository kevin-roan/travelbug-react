import React, { useState, useEffect } from "react";
import axios from "axios";
import { Snackbar, Alert, TextField, Button } from '@mui/material';


export default function Contact() {
  const [contactInfo, setContactInfo] = useState([]);
  const [packageListType, setPackageListType] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    packageType: "",
    message: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchContactInformation = () => {
      axios
        .get(`https://iamanas.in/travel_bug/web_api/contact_us`)
        .then((response) => {
          setContactInfo(response.data.data.addresses);
        })
        .catch((error) => {
          console.log("Error fetching data", error);
          setError(error);
        });
    };
    fetchContactInformation();
    const fetchPackageList = () => {
      axios
        .get(`https://iamanas.in/travel_bug/web_api/package_type_list`)
        .then((response) => {
          setPackageListType(response.data.data);
        })
        .catch((error) => {
          setError(error.message);
          console.log(error, "erro");
        });
    };
    fetchPackageList();
  }, []);
  if (error) {
    <div className="container">{error}</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://iamanas.in/travel_bug/web_api/insert_contact_us`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.status) {
        setFormData({
          username: "",
          email: "",
          package_type_id: "",
          message: "",
        });
        alert("Message sent successfully!");
      }
    } catch (error) {
      setError(error.message);
      console.log("Error submitting form:", error.request);
      alert(`Sorry try again later, ${error}`);
    }
  };

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
            <h1 className="breadcumb-title">Contact Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/#/">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="poppins-item">Get In Touch</span>
            <h2 className="sec-title">Our Contact Information</h2>
          </div>
          <div className="row gy-4 justify-content-center">
            {contactInfo &&
              contactInfo.map((address, index) => (
                <div className="col-xl-4 col-lg-6" key={index}>
                  <div className="about-contact-grid style2 h-100">
                    <div className="about-contact-icon">
                      <img src="assets/img/icon/location-dot2.svg" alt="" />
                    </div>
                    <div className="about-contact-details">
                      <h6 className="box-title">{address.title}</h6>
                      <p className="about-contact-details-text">
                        {address.address.line_1}
                      </p>
                      <p className="about-contact-details-text">
                        {address.address.line_2}
                      </p>
                      <p className="about-contact-details-text">
                        {address.address.line_3}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            {/* 
            <div className="col-xl-4 col-lg-6">
              <div className="about-contact-grid">
                <div className="about-contact-icon">
                  <img src="assets/img/icon/call.svg" alt="" />
                </div>
                <div className="about-contact-details">
                  <h6 className="box-title">Phone Number</h6>
                  <p className="about-contact-details-text">
                    <a href="tel:919037317949">+91 90373 17949</a>
                  </p>
                  <p className="about-contact-details-text">
                    <a href="tel:919037317949">+91 90373 17949</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="about-contact-grid">
                <div className="about-contact-icon">
                  <img src="assets/img/icon/mail.svg" alt="" />
                </div>
                <div className="about-contact-details">
                  <h6 className="box-title">Email Address</h6>
                  <p className="about-contact-details-text">
                    <a href="mailto:mailinfo00@.com">mailinfo.com</a>
                  </p>
                  <p className="about-contact-details-text">
                    <a href="mailto:support24@.com">support.com</a>
                  </p>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>{" "}
      <div
        className="space-extra2-top space-extra2-bottom"
        data-bg-src="assets/img/bg/video_bg_1.jpg"
      >
        <div className="container">
          <div className="row flex-row-reverse justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="video-box1">
                <a
                  href="https://www.youtube.com/watch?v=cQfIUPw72Dk"
                  // className="play-btn style2 popup-video"
                >
                  <i className="fa-sharp fa-solid fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="contact-form style2 ajax-contact"
                >
                  <h3 className="sec-title mb-30 text-capitalize">
                    Book a tour
                  </h3>
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="">
        <div className="container-fluid">
          <div className="contact-map style2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.3168775528025!2d55.324426800000005!3d25.158776099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6780a2842a21%3A0xb6ff5ca65250c789!2sTravelbug%20Tourism!5e0!3m2!1sen!2sin!4v1743774067946!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <div className="contact-icon">
              <img src="assets/img/icon/location-dot3.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
