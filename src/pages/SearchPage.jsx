import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied"; // Importing the icon
import "./search.css";

const SearchPage = () => {
  const data = []; // Simulate no data available (you can replace this with real data)

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="search-container">
      {data.length === 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          textAlign="center"
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
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
      ) : (
        <div>
          {/* Render the actual data here when available */}
   
        </div>
      )}
    </div>
  );
};

export default SearchPage;
