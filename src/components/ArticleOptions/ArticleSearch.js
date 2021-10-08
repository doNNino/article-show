import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useProjectContext } from "../../context/ProjectContext";

// styling of the search component using theme from MUI
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "500px",
  [theme.breakpoints.down("md")]: {
    width: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));
// start of the component
export default function ArticleSearch() {
  //destructuring contextAPI
  const { projectDispatch } = useProjectContext();

  // component state values
  const [searchValue, setSearchValue] = useState("");
  // updating the search value to the state
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  // checking if enter was pressed if so fetch data
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      await projectDispatch({ type: "searchValue", payload: searchValue });
    }
  };
  return (
    <Box className="mb-2">
      <Search onChange={handleInputChange} onKeyDown={handleKeyDown}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for specific article"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}
