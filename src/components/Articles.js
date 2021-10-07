import React from "react";
// Material UI imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import data from "../articles.json";
//custom components imports
import ArticleCard from "./ArticleCard";
import ArticleOptions from "./ArticleOptions/ArticleOptions";

export default function Articles() {
  return (
    <div className="container-fluid p-0 main-background">
      <ArticleOptions />
      <Container maxWidth="xl" className="h-100">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {data.data.data.map((item) => (
              <ArticleCard articleDetails={item} />
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
