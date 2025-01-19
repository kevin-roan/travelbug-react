import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied"; // Importing the icon
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./search.css";
import Card from "../components/Card";
import FilterCard from "../components/Filtercard";

const SearchPage = () => {
  const data = [1]; // Simulate no data available (you can replace this with real data)
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  useEffect(() => {
    const getQueryParams = () => {
      const searchParams = new URLSearchParams(location.search);
      return {
        destination_id: searchParams.get("destination_id") || "",
        adventure_type_id: searchParams.get("adventure_type_id") || "",
        duration: searchParams.get("duration") || "",
        tour_category_id: searchParams.get("tour_category_id") || "",
      };
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://iamanas.in/travel_bug/web_api/home_page_filter",
          {
            params: getQueryParams(), // Correctly passing params here
          },
        );
        setHomeData(response.data.data);
        console.log("qyewr repsonse", response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location.search]);

  return (
    <div className="search-contain">
      {homeData.length === 0 ? (
        <>
          <FilterCard />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
            textAlign="center"
            sx={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              height: "60vh",
            }}
          >
            <SentimentDissatisfiedIcon
              sx={{
                fontSize: "60px",
                color: "#999",
                marginBottom: "15px",
              }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{ marginBottom: "10px", color: "#666" }}
            >
              No Data Available
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Try searching with a different query or check back later.
            </Typography>
          </Box>
        </>
      ) : (
        <div>
          <div className="search-banner">
            <FilterCard />
          </div>

          <div
            className="container"
            style={{
              maxWidth: "1300px",
              marginTop: "50px",
              marginBottom: "50px",
              display: "flex",
              flexWrap: "wrap",
              gap: "20px", // Add space between items
              justifyContent: "space-evenly", // Center items horizontally
            }}
          >
            {homeData &&
              homeData.map((item, index) => (
                <Card
                  key={item?.id || index} // Ensure a unique key for each item
                  id={item?.id}
                  title={item.title}
                  starting_point={item.starting_point}
                  ending_point={item.ending_point}
                  amount={item.amount}
                  standard_amount={item.standard_amount}
                  discount={Math.floor(item.discount)}
                  persons={item.persons}
                  destination_title={item.destination_title}
                  short_description={item.short_descrption}
                  day={item.day}
                  night={item.night}
                  thumbnail={item.thumbnail}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
