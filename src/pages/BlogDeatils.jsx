import { useState, useEffect } from "react";
import axios from "axios";

import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent, Avatar, Box, IconButton, Divider, TextField, Button, Paper, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube, Pinterest, Send } from "@mui/icons-material";
import { useParams } from "react-router-dom";



export default function BlogDeatils() {
  const {slug}=useParams()
  const [blogData, setBlogData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/blog_details/${slug}`)
      .then((response) => {
        setBlogData(response.data.data?.blog_details);
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 console.log('active',blogData);
 
  return (
    <>
   <Container maxWidth="lg" style={{marginBottom:'30px'}}>
  

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Blog Content */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardMedia component="img" height="400" image={blogData?.image} alt="Blog Image" />
            <CardContent>
              <Typography variant="h4" fontWeight="bold" gutterBottom>{blogData?.title }</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>{blogData?.meta_description}</Typography>
              <Divider sx={{ my: 2 }} />
              <Box dangerouslySetInnerHTML={{ __html: blogData?.description }} sx={{ typography: "body1", lineHeight: 1.6 }} />
              <Divider sx={{ my: 2 }} />

              {/* Author Section */}
              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Avatar src={blogData?.author_image} sx={{ width: 60, height: 60, mr: 2 }} />
                <Box>
                  <Typography variant="h6">{blogData?.author}</Typography>
                  <Typography variant="body2" color="text.secondary">Travel Blogger & Photographer</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

         
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* About Author */}
          <Paper sx={{ p: 3, textAlign: "center", mb: 3 }}>
            <Avatar src={blogData?.author_image} sx={{ width: 80, height: 80, mx: "auto", mb: 2 }} />
            <Typography variant="h6">{blogData?.author}</Typography>
            <Typography variant="body2" color="text.secondary">Exploring the world, one place at a time.</Typography>
          </Paper>

          {/* Social Links */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {blogData?.facebook && <IconButton component="a" href={blogData?.facebook} target="_blank"><Facebook color="primary" /></IconButton>}
              {blogData?.twitter && <IconButton component="a" href={blogData?.twitter} target="_blank"><Twitter color="primary" /></IconButton>}
              {blogData?.instagram && <IconButton component="a" href={blogData?.instagram} target="_blank"><Instagram color="secondary" /></IconButton>}
              {blogData?.pinterest && <IconButton component="a" href={blogData?.pinterest} target="_blank"><Pinterest color="error" /></IconButton>}
            </Box>
          </Paper>
        </Grid>
      </Grid>

    
    </Container>
    </>
  );
}
