import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Beachpage from "./Beachpage";
import AyurvedaPage from "./AyurvedaPage";
import EscortedPage from "./EscortedPage";

export default function PackageDetails() {
  const [details, setDetails] = useState(null);
  const [ayurveda, setAyurveda] = useState(null);
  const [escorted, setEscorted] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/package_type_details/${id}`)
      .then((response) => {
        if (id == 1) {
          setDetails(response.data);
          console.log("beach ");
        } else if (id == 2) {
          setAyurveda(response.data);
        } else if (id == 3) {
          setEscorted(response.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setError(error);
      });
  }, [id]);

  if (error) return <div>Error loading data. Please try again later.</div>;

  if (details) return <Beachpage details={details} />;
  if (ayurveda) return <AyurvedaPage ayurveda={ayurveda} />;
  if (escorted) return <EscortedPage escorted={escorted} />;

  return <div>Loading...</div>;
}
