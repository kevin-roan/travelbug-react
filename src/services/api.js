import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchAbout = async () => {
  try {
    const response = await apiClient.get("/about");
    return response.data.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching about data:", error);
    throw error; // Re-throw the error for handling in the calling component
  }
};
