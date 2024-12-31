import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Beachpage from "./Beachpage";
import AyurvedaPage from "./AyurvedaPage";
import EscortedPage from "./EscortedPage";

export default function PackageDetails() {
  const { id } = useParams();
  if (id === 1) {
    return <Beachpage />;
  } else if (id === 2) {
    return <AyurvedaPage />;
  } else if (id === 3) {
    return <EscortedPage />;
  } else return <div>Loading...</div>;
}
