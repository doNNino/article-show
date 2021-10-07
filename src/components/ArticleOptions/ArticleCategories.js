// default Imports
import React, { useState } from "react";
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
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";

// Start of the component
export default function ArticleCategories(props) {
  // Language filter state
  const [englishChecked, setChecked] = useState(false);

  // function for changing language filter
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  // information if language filter is enabled
  const languageFilterEnabled = englishChecked ? "Enabled" : "Disabled";

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <p className="article-categories-info">Categories: </p>
      <List sx={{ paddingTop: 0 }}>
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText>Technology</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SportsSoccerIcon />
          </ListItemIcon>
          <ListItemText>Sports</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HighlightOffIcon />
          </ListItemIcon>
          <ListItemText>Clear Filter</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <p className="article-categories-info">EN language only: </p>
      <List sx={{ paddingTop: 0 }}>
        <ListItem>
          <Switch
            checked={englishChecked}
            color="warning"
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <ListItemText>{languageFilterEnabled}</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <p className="article-categories-info">Sort Articles by Date: </p>
      <List sx={{ paddingTop: 0 }}>
        <ListItem button>
          <ListItemIcon>
            <ArrowUpwardIcon />
          </ListItemIcon>
          <ListItemText>Newest First</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ArrowDownwardIcon />
          </ListItemIcon>
          <ListItemText>Olderst First</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HighlightOffIcon />
          </ListItemIcon>
          <ListItemText>Clear Filter</ListItemText>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
}
