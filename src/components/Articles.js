import React, { useEffect } from "react";
// Material UI imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// other imports
import axios from "axios";
//custom components imports
import ArticleCard from "./ArticleCard";
import ArticleOptions from "./ArticleOptions/ArticleOptions";
import LoadingProgress from "./HelperComponents/LoadingProgress";
//context import
import { useProjectContext } from "../context/ProjectContext";

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
  async function fetchData() {
    try {
      await projectDispatch({ type: "loadingProgress", payload: true });
      const params = {
        access_key: `${process.env.REACT_APP_ACCESS_KEY}`,
        limit: 100,
        keywords: searchValue,
        categories: category,
        languages: language,
        sort: sortingFilter,
      };
      console.log(params);
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/news`,
        {
          params: params,
        }
      );
      console.log(response);
      await projectDispatch({ type: "dataFetch", payload: response.data.data });
      await projectDispatch({ type: "loadingProgress", payload: false });
      console.log(data);
      console.log(response);
    } catch (error) {
      await projectDispatch({ type: "loadingProgress", payload: false });
      console.log(error);
      alert("ERROR FETCHING DATA");
      throw error;
    }
  }
  useEffect(() => {
    fetchData();
    console.log("fetchovano", projectState);
  }, [category, language, sortingFilter, searchValue]);
  return (
    <div className="container-fluid p-0 main-background">
      <ArticleOptions />
      <Container maxWidth="xl" className="h-100">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {data.map((item) => (
              <ArticleCard articleDetails={item} />
            ))}
          </Grid>
        </Box>
      </Container>
      {loading && <LoadingProgress />}
    </div>
  );
}
