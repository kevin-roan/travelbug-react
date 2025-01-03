import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import axios from "axios";
import TourPackageBanner from "../components/packageDetailBanner";

export default function PackageDetails() {
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://techasainfotech.com/travel_bug/web_api/package_details/${id}`,
      )
      .then((response) => {
        setData(response.data.data);
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
            __html: DOMPurify.sanitize(data.package_details.description),
          }}
        ></div>

        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details.overview),
          }}
        ></div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details.inclusion),
          }}
        ></div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details.highlights),
          }}
        ></div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details.itinerary),
          }}
        ></div>
      </div>
    );
}
