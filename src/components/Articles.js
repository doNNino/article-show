import React, { useEffect, useRef, useCallback } from "react";
// Material UI imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//custom components imports
import ArticleCard from "./ArticleCard";
import ArticleOptions from "./ArticleOptions/ArticleOptions";
import LoadingProgress from "./HelperComponents/LoadingProgress";
//context import
import { useProjectContext } from "../context/ProjectContext";
// helper functions import
import { fetchData } from "./HelperFunctions/fetchData";

export default function Articles() {
  //destructuring contextAPI state
  const { projectState, projectDispatch } = useProjectContext();
  const {
    data,
    category,
    languageFilter,
    sortingFilter,
    searchValue,
    loading,
  } = projectState;
  const language = languageFilter ? "en" : "";

  const loader = useRef(null);
  // observer of reaching last fetched article for implementing infinite scroll
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      console.log("we reached last fetched article");
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  // fetch data whenever one of those filters is changed
  useEffect(() => {
    fetchData(projectState, projectDispatch);
  }, [category, language, sortingFilter, searchValue]);

  return (
    <div className="container-fluid p-0 pb-2 main-background">
      <ArticleOptions />
      <Container maxWidth="xl" className="h-100">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {data.map((item, index) => (
              <ArticleCard articleDetails={item} key={index} />
            ))}
            <div ref={loader} />
          </Grid>
        </Box>
      </Container>
      {loading && <LoadingProgress />}
    </div>
  );
}
