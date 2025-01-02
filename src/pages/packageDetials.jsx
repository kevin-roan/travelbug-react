import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import axios from "axios";

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
        console.log("respponse", response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  if (!data) {
    return (
      <div className="container flex items-center justify-center">
        Loading...
      </div>
    );
  } else
    return (
      <div className="container">
        <h1>{data.package_details.title}</h1>
        <image alt="image" src={data.package_details.thumbnail} />
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
