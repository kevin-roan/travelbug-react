import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchAbout } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { Snackbar, Alert, TextField, Button } from '@mui/material';




export default function About() {
  const [aboutInfo, setAboutInfo] = useState("");
  const [error, setError] = useState(null);



  const [selectedPackage, setSelectedPackage] = useState(null); // Track the selected package
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state




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





  const handleReadMore = (item) => {
    setSelectedPackage(item); // Set the selected package details
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setSelectedPackage(null); // Clear the selected package
    setIsModalOpen(false); // Close the modal
  };

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/about/`)
      .then((response) => {
        setAboutInfo(response.data.data);
        console.log("api response", response.data);
        console.log("about info data", response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setError(error);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="breadcumb-wrapper "
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Travel Bug</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/#/">Home</a>
              </li>
              <li>About Travel Bug</li>
            </ul>
          </div>
        </div>
      </div>{" "}
      <div
        className="about-area position-relative overflow-hidden overflow-hidden space"
        id="about-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="img-box3" style={{ padding: 30 }}>
                <div className="img1">
                  <img src="assets/img/normal/about_3_1.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="assets/img/normal/about_3_2.jpg" alt="About" />
                </div>
                <div className="img3 movingX">
                  <img src="assets/img/normal/about_3_3.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="ps-xl-4">
                <div className="title-area mb-20">
                  <span className="sub-title style1 ">
                    Welcome To Travel Bug India
                  </span>
                  <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                    {aboutInfo && aboutInfo.welcome_message.title}
                  </h2>
                </div>

                <p className="pe-xl-5">
                  {aboutInfo && aboutInfo.welcome_message.introduction}
                </p>
                <h4 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                  Why Choose Travel Bug India
                </h4>
                <p className="mb-30 pe-xl-5">
                  {aboutInfo && aboutInfo.why_choose_travel_bug.introduction}
                </p>
                <p className="mb-30 pe-xl-5">
                  {aboutInfo &&
                    aboutInfo.why_choose_travel_bug.special_features
                      .description}
                </p>
              </div>
            </div>
            <div
              className="about-item-wrap"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 20,
                marginTop: 40,
              }}
            >
              {aboutInfo &&
                aboutInfo.why_choose_travel_bug.special_features.features.map(
                  (item, index) => (
                    <div
                      className="about-item style2"
                      key={index}
                      style={{
                        backgroundColor: "#1CA8CB",
                        borderRadius: 20,
                        padding: 20,
                        height: 180,
                        paddingRight: 20,
                        paddingLeft: 20,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="about-item_img">
                        <img src="assets/img/icon/about_1_1.svg" alt="" />
                      </div>
                      <div className="about-item_centent">
                        <h5 className="box-title">{item.title}</h5>
                        <p
                          className="about-item_text"
                          style={{ color: "white" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ),
                )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="mt-35">
              <a onClick={() => navigate(`/contact`)} className="th-btn style3 th-icon">
                Contact With Us
              </a>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup movingX d-none d-xxl-block"
          data-top="4%"
          data-left="2%"
        >
          <img src="assets/img/shape/shape_2_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup jump d-none d-xxl-block"
          data-top="28%"
          data-right="5%"
        >
          <img src="assets/img/shape/shape_2_2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup spin d-none d-xxl-block"
          data-bottom="18%"
          data-left="2%"
        >
          <img src="assets/img/shape/shape_2_3.png" alt="shape" />
        </div>
        <div
          className="shape-mockup movixgX d-none d-xxl-block"
          data-bottom="18%"
          data-right="2%"
        >
          <img src="assets/img/shape/shape_2_4.png" alt="shape" />
        </div>
      </div>



      {aboutInfo?.travel_packages?.package_types?.length !== 0 ? (
        <section
          className="position-relative overflow-hidden space-bottom"
          id="destination-sec"
        >
          <div className="container">
            <div className="title-area text-center">
              <span className="sub-title">Services We Offer</span>
              <h2 className="sec-title">
                {aboutInfo && aboutInfo.travel_packages.title}
              </h2>

              <p className="mb-30 pe-xl-5">
                {aboutInfo &&
                  aboutInfo.travel_packages.package_types.introduction}
              </p>
            </div>
            {/* <div className="row gy-4 gx-4">
     {aboutInfo &&
       aboutInfo.travel_packages.package_types.map((item) => (
         <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
           <div className="destination-item th-ani">
             <div className="destination-item_img global-img">
               <img src={item.image} alt={item.title} />
             </div>
             <div className="destination-content">
               <h3 className="box-title">
                 <a href="service-details.html">{item.title}</a>
               </h3>
               <p className="destination-text">{item.description}</p>
               <a href="contact.html" className="th-btn style4 th-icon">
                 Book Now
               </a>
             </div>
           </div>
         </div>
       ))}
   </div> */}





            <>

              <div
                style={{
                  maxWidth: "1200px",
                  margin: "0 auto",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >


                <div className="card-container">
                  {aboutInfo?.travel_packages?.package_types?.map((item) => (
                    <div key={item.id} className="card-item">
                      <div className="tour-box_img global-img" style={{ height: "220px" }}>
                        <img
                          src={item.image}
                          alt="image"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          flex: 1,
                          padding: "15px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <h4 className="box-title" style={{ marginBottom: "10px" }}>
                          <a className="ne-text text-start-start">{item.title}</a>
                        </h4>
                        <div
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            marginBottom: "10px",
                            fontSize: "14px",
                            color: "#555",
                          }}
                        >
                          {item.description}
                        </div>
                        <button
                          onClick={() => handleReadMore(item)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "#007bff",
                            cursor: "pointer",
                            padding: 0,
                            marginBottom: "10px",
                            textAlign: "left",
                          }}
                        >
                          Read More
                        </button>
                        <h3 className="tour-box_price">
                          <span className="box-title">{item.amount}</span>
                        </h3>
                        <div
                          className="tour-action action-item"
                          style={{
                            marginTop: "10px",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Link
                            to={`/tour_packages/${item.id}`}
                            className="th-btn style4 th-icon"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>



                {/* Modal */}
                {isModalOpen && selectedPackage && (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 1000,
                    }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        padding: "20px",
                        borderRadius: "8px",
                        maxWidth: "500px",
                        width: "90%",
                        textAlign: "center",
                      }}
                    >
                      <h2 className="sec-title" style={{ fontSize: "16px", marginBottom: "10px" }}>
                        {selectedPackage.title}
                      </h2>
                      <p className="sec-text">{selectedPackage.description}</p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="btn btn-outline-primary"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "30px",
                        borderColor: "white",
                        color: "white",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "white";
                        e.target.style.color = "#007bff";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "white";
                      }}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </>


          </div>
        </section>
      ) : ''}

      <section className="discover-india-section-new">
        <div className="container">
          <div className="title-area text-center">
            <h2 className="sub-title">Discover India</h2>
            <h4 className="sec-title">
              {aboutInfo && aboutInfo.discover_india.title}
            </h4>
          </div>
          <p className="description">
            {aboutInfo && aboutInfo.discover_india.description}
          </p>
          <div className="contact-us text-center">
            <h4 className="sub-title">
              {aboutInfo && aboutInfo.contact_us.title}
            </h4>
            <p className="introduction">
              {aboutInfo && aboutInfo.contact_us.introduction}
            </p>
          </div>
        </div>
      </section>
      <div className="booking-form-container" style={{ maxWidth: '900px', margin: '0 auto', marginTop: '20px', marginBottom: '20px' }}>
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
    </>
  );
}
