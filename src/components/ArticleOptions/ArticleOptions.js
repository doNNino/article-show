// default imports
import React from "react";
// custom components imports
import ArticleSearch from "./ArticleSearch";
import ArticleDrawer from "./ArticleDrawer";
// start of the component
export default function ArticleOptions() {
  return (
    <div className="w-100 mb-2 article-options-main-div">
      <ArticleDrawer />
      <ArticleSearch />
    </div>
  );
}
