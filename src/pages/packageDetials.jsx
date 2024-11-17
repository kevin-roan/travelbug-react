import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PackageDetails() {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/package_type_details/${id}`)
      .then((response) => {
        setDetails(response.data.data);
        console.log("response", details);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setError(error);
      });
  }, []);
  if (!details) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h3>{details.title}</h3>
    </div>
  );
}
