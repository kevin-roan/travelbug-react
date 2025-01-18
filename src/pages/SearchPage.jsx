import { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied"; // Importing the icon
import "./search.css";
import Card from "../components/Card";
import FilterCard from "../components/Filtercard";

const SearchPage = () => {
  const data = [1]; // Simulate no data available (you can replace this with real data)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const homeData = {
    packages: [
      {
        id: "8",
        title: "South India Beaches & Heritage Tour 13 Nights & 14 Days",
        short_descrption:
          "Experience the South India Beaches  Heritage Tour Package, an unforgettable 14-day journey through the breathtaking landscapes, rich culture, and historical treasures of South India.",
        starting_point: null,
        ending_point: null,
        amount: "3039",
        standard_amount: "5000",
        discount: "0",
        persons: "1-5",
        destination_title: "Kerala",
        day: "13",
        night: "14",
        thumbnail:
          "https://iamanas.in/travel_bug/uploads/package_images/012025/0d98bde7029fe9fc9a21abb3d4a199a1.jpg",
      },
      {
        id: "9",
        title: "North India Beaches & Heritage Tour 13 Nights & 14 Days",
        short_descrption:
          "Experience the South India Beaches  Heritage Tour Package, an unforgettable 14-day journey through the breathtaking landscapes, rich culture, and historical treasures of South India.",
        starting_point: null,
        ending_point: null,
        amount: "3039",
        standard_amount: "5000",
        discount: "39",
        persons: "1-7",
        destination_title: "Kerala",
        day: "13",
        night: "14",
        thumbnail:
          "https://iamanas.in/travel_bug/uploads/package_images/012025/0d98bde7029fe9fc9a21abb3d4a199a1.jpg",
      },
      {
        id: "10",
        title: "Kerala Beaches & Heritage Tour 5 Nights & 6 Days",
        short_descrption:
          "Experience the South India Beaches  Heritage Tour Package, an unforgettable 14-day journey through the breathtaking landscapes, rich culture, and historical treasures of South India.",
        starting_point: null,
        ending_point: null,
        amount: "3039",
        standard_amount: "5000",
        discount: "39",
        persons: "1-5",
        destination_title: "Kerala",
        day: "6",
        night: "5",
        thumbnail:
          "https://iamanas.in/travel_bug/uploads/package_images/012025/0d98bde7029fe9fc9a21abb3d4a199a1.jpg",
      },
      {
        id: "11",
        title: "Goa Beaches",
        short_descrption:
          "Experience the South India Beaches  Heritage Tour Package, an unforgettable 14-day journey through the breathtaking landscapes, rich culture, and historical treasures of South India.",
        starting_point: null,
        ending_point: null,
        amount: "3039",
        standard_amount: "5000",
        discount: "39",
        persons: "1-5",
        destination_title: "Kerala",
        day: "13",
        night: "14",
        thumbnail:
          "https://iamanas.in/travel_bug/uploads/package_images/012025/0d98bde7029fe9fc9a21abb3d4a199a1.jpg",
      },
    ],
  };
  return (
    <div className="search-contain">
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
              homeData.packages.map((item, index) => (
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
