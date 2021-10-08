// default Imports
import React from "react";
// Material UI imports
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ComputerIcon from "@mui/icons-material/Computer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
// contextAPI import
import { useProjectContext } from "../../context/ProjectContext";

// Start of the component
export default function ArticleCategories(props) {
  // contextAPI destructuring
  const { projectState, projectDispatch } = useProjectContext();
  // globalState destructuring
  const { category, sortingFilter, languageFilter } = projectState;

  // function for changing language filter
  const handleLanguageChange = (event) => {
    projectDispatch({
      type: "changeLanguageFilter",
      payload: event.target.checked,
    });
    console.log(projectState);
  };
  // function for changing category
  const handleCategoryChange = (value) => {
    projectDispatch({
      type: "changeCategory",
      payload: value,
    });
  };
  // function for changing sorting filter
  const handleSortingChange = (value) => {
    projectDispatch({
      type: "changeSortingFilter",
      payload: value,
    });
  };
  // information if language filter is enabled
  const languageFilterEnabled = languageFilter ? "Enabled" : "Disabled";

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <p className="article-categories-info">Categories: </p>
      <List className="pt-1">
        <ListItem
          button
          onClick={() => handleCategoryChange("technology")}
          className={
            category === "technology" ? "article-categories-active " : ""
          }
        >
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText>Technology</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => handleCategoryChange("sports")}
          className={category === "sports" ? "article-categories-active " : ""}
        >
          <ListItemIcon>
            <SportsSoccerIcon />
          </ListItemIcon>
          <ListItemText>Sports</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <p className="article-categories-info">EN language only: </p>
      <List className="pt-1">
        <ListItem>
          <Switch
            checked={languageFilter}
            color="default"
            onChange={handleLanguageChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <ListItemText>{languageFilterEnabled}</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <p className="article-categories-info">Sort Articles by Date: </p>
      <List className="pt-1">
        <ListItem
          button
          onClick={() => handleSortingChange("published_desc")}
          className={
            sortingFilter === "published_desc"
              ? "article-categories-active "
              : ""
          }
        >
          <ListItemIcon>
            <ArrowUpwardIcon />
          </ListItemIcon>
          <ListItemText>Newest First</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => handleSortingChange("published_asc")}
          className={
            sortingFilter === "published_asc"
              ? "article-categories-active "
              : ""
          }
        >
          <ListItemIcon>
            <ArrowDownwardIcon />
          </ListItemIcon>
          <ListItemText>Olderst First</ListItemText>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
}
