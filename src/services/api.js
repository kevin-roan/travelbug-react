// src/services/api.js
import axios from "axios";
const api_endpoint = "https://techasainfotech.com/travel_bug/web_api";

const apiClient = axios.create({
  baseURL: api_endpoint,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Example GET request
export const fetchData = async () => {
  try {
    const response = await apiClient.get("/about"); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Optional: Rethrow the error for further handling
  }
};

// Example POST request
export const postData = async (data) => {
  try {
    const response = await apiClient.post("/endpoint", data); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error; // Optional: Rethrow the error for further handling
  }
};
