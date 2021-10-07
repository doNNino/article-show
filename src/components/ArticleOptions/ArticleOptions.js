import React from "react";
import ArticleSearch from "./ArticleSearch";
import Button from "@mui/material/Button";

export default function ArticleOptions() {
  return (
    <div className="w-100 mb-2 article-options-main-div">
      <Button
        sx={{ color: "white" }}
        className="mb-2 article-options-more-button"
      >
        More options
      </Button>
      <ArticleSearch />
    </div>
  );
}
