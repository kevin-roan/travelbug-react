import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import axios from "axios";

const successMessage = "We will contact you soon";
const failedMessage =
  "Sorry that failed,Try again or please contact us through the email address";

export default function EnquiryForm() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [vacationType, setVactionType] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    starting_date: "",
    ending_date: "",
  });

  const notify = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchVacationType = async () => {
      const result = await axios.get(
        "https://iamanas.in/travel_bug/web_api/vacation_type_list",
      );
      if (result.status) {
        setVactionType(result.data.data);
        console.log("vacation type", result.data.data);
      } else setError("error");
    };
    fetchVacationType();
  }, []);

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
        `https://iamanas.in/travel_bug/web_api/insert_package_enquiry`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log("response", response);

      if (response.status) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          whatsapp: "",
          starting_date: "",
          ending_date: "",
        });

        notify(successMessage);
      }
    } catch (error) {
      setError(error.message);
      console.log("Error submitting form:", error.request);
      notify(failedMessage);
    }
  };

  const formStyles = {
    container: {
      position: "fixed",
      maxHeight: "90rem",
      flexShrink: 1,
      right: isMinimized ? "-300px" : 0,
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "white",
      padding: "20px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      width: "20rem",
      borderRadius: "8px 0 0 8px",
      zIndex: 1000,
      margin: "20px",
      transition: "right 0.3s ease",
      "@media (max-width: 768px)": {
        display: "none", // Hide on mobile
      },
    },
    toggleButton: {
      position: "absolute",
      left: "-40px",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "#008080",
      color: "white",
      border: "none",
      padding: "10px",
      cursor: "pointer",
      borderRadius: "4px 0 0 4px",
      width: "40px",
      height: "40px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
    },
    inputGroup: {
      marginBottom: "15px",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
    },
    phoneInput: {
      width: "100%",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
    },
    submitButton: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#008080",
      border: "none",
      borderRadius: "4px",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      zIndex: 2000,
    },
    flagIcon: {
      position: "absolute",
      left: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "25px",
    },
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button
          style={formStyles.toggleButton}
          onClick={() => setIsMinimized(!isMinimized)}
        >
          {isMinimized ? "→" : "←"}
        </button>

        <h2 style={formStyles.title}>Stay Connected</h2>

        <div style={formStyles.inputGroup}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.fullName}
            style={formStyles.input}
            onChange={handleInputChange}
          />
        </div>

        <div style={formStyles.inputGroup}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            style={{
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              padding: "10px",
              marginLeft: 0,
              marginRight: 0,
            }}
            onChange={handleInputChange}
          />
        </div>
        <div style={formStyles.inputGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            value={formData.email}
            style={formStyles.input}
            onChange={handleInputChange}
          />
        </div>

        <div style={formStyles.inputGroup}>
          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp Number"
            value={formData.whatsappNumber}
            style={{
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              padding: "10px",
              marginLeft: 0,
              marginRight: 0,
            }}
            onChange={handleInputChange}
          />
        </div>

        <div style={formStyles.inputGroup}>
          <label>Starting Date</label>
          <input
            type="date"
            name="starting_date"
            placeholder="Starting Date"
            style={{
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              padding: "10px",
              marginLeft: 0,
              marginRight: 0,
            }}
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        <div style={formStyles.inputGroup}>
          <label>Ending Date</label>
          <input
            type="date"
            name="ending_date"
            placeholder="Ending Date"
            style={{
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              padding: "10px",
              marginLeft: 0,
              marginRight: 0,
            }}
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        <button style={formStyles.submitButton} type="submit">
          SUBMIT
        </button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </form>
    </div>
  );
}
