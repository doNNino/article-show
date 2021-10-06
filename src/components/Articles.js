import React from "react";
// Material UI imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import data from "../articles.json";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  return (
    <Container maxWidth="xl" className="h-100">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {data.data.data.map((item) => (
            <ArticleCard articleDetails={item} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
