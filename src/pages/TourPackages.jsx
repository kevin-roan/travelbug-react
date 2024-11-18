import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TourPackages() {
  const [tourPackages, setTourpackages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/holiday_packages`)
      .then((response) => {
        setTourpackages(response.data.data.holiday_packages);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setError(error);
      });
  }, []);

  if (error) {
    throw new Error(error);
  }
  if (!tourPackages) {
    return <div>Loading</div>;
  }
  return (
    <div style={{ padding: 30, textAlign: "center" }}>
      <span className="sub-title">Holiday Packages</span>
      <h2 className="sec-title">{tourPackages.title}</h2>
      <p>{tourPackages.introduction}</p>

      <span className="sub-title">Make Your Tour More Pleasure</span>
      <h3 className="">Tour Packages</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {tourPackages.package_types.map((item, _) => (
          <div className="" key={item.id} style={{ width: 300, margin: 10 }}>
            <div className="tour-box th-ani gsap-cursor">
              <div className="tour-box_img global-img">
                <img
                  src={item.image}
                  alt="image"
                  style={{
                    height: 280,
                  }}
                />
              </div>
              <div className="tour-content">
                <h4 className="box-title">
                  <a href="tour-details.html">{item.title}</a>
                </h4>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginBottom: 10,
                  }}
                >
                  {item.description}
                </div>
                <h3 className="tour-box_price">
                  <span className="box-title">{item.amount}</span>
                </h3>
                <div
                  className="tour-action"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    to={`package_details/${item.id}`}
                    className="th-btn style4 th-icon"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
