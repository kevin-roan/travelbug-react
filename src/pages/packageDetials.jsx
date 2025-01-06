import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import axios from "axios";
import TourPackageBanner from "../components/packageDetailBanner";

export default function PackageDetails() {
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/package_details/${id}`)
      .then((response) => {
        setData(response.data.data);
        console.log("Package details", response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  if (!data) {
    return (
      <div className="container flex items-center justify-center">
        Loading...
      </div>
    );
  } else
    return (
      <div className="container">
        <TourPackageBanner
          id={data.package_details.id}
          title={data.package_details.title}
          day={data.package_details.day}
          night={data.package_details.night}
          amount={data.package_details.amount}
          thumbnail={data.package_details.thumbnail}
          startingPoint={data.package_details.starting_point}
          endingPoint={data.package_details.ending_point}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details?.description),
          }}
        ></div>

        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details?.overview),
          }}
        ></div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details?.highlights),
          }}
        ></div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details?.other_info),
          }}
        ></div>

        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details?.inclusion),
          }}
        ></div>

        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details?.itinerary),
          }}
        ></div>
        <section
          className="similar-packages "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {data.package_details.similar_packages.map((item) => (
            <div
              className=""
              key={item.id}
              style={{
                width: 300,
                margin: 10,
              }}
            >
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img
                    src={item.thumbnail}
                    alt="image"
                    style={{
                      height: 280,
                    }}
                  />
                </div>
                <div className="tour-content">
                  <h4 className="box-title">
                    <a href="tour-tourData.html">{item.title}</a>
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
                    <span className="box-title">{item.amount} €</span>
                  </h3>
                  <div
                    className="tour-action"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Link
                      to={`/package_details/${item.id}`}
                      className="th-btn style4 th-icon"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
}
