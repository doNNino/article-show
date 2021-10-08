//default imports
import React, { useState } from "react";
// materialUI imports
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// custom components imports
import ArticleCategories from "./ArticleCategories";
// start of the component
export default function ArticleDrawer() {
  // state if drawer is open or not
  const [open, setOpen] = useState(false);
  // function that control if drawer is open or closed
  const toggleDrawer = (openOrClose) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(openOrClose);
  };

  return (
    <div>
      <Button
        className="mb-2 article-options-more-button"
        onClick={toggleDrawer(true)}
      >
        More options
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <ArticleCategories />
      </Drawer>
    </div>
  );
}
