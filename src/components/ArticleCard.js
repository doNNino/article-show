import React, { useState } from "react";
// material UI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// default photo used for articles that do not have URL property fetched
import nophoto from "../no-photo.png";

// Expand more component for expandinig aditional info about an Article
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
// Main component starts here
export default function ArticleCard(props) {
  // state of the component
  const [expanded, setExpanded] = useState(false);
  // click handler for expanding 'ExpandMore' component
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //destructuring props
  const { articleDetails } = props;
  // destructuring information from articleDetails
  const { title, description, author, published_at, image, url } =
    articleDetails;
  // image that will be used inside Article, if fetched use URL if not use default photo
  const img = image ? image : nophoto;
  // style of the image, if default photo is used use different css object
  const imgStyle = image ? {} : { margin: "auto", width: 250 };
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
          sx={imgStyle}
        />
        <CardContent className="article-card-content-background">
          <Typography
            className="article-card-title"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
        </CardContent>
        <CardActions
          className="article-card-action"
          disableSpacing
          onClick={handleExpandClick}
        >
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            className="m-0"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className="article-card-content-background">
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className="mb-3"
            >
              <p className="article-card-info">Author:</p> {author}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className="mb-3"
            >
              <p className="article-card-info">Date of Publish:</p>{" "}
              {published_at}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className="mb-3"
            >
              <p className="article-card-info">Original Post:</p>{" "}
              <a href={url} target="_blank" rel="noreferrer">
                click here
              </a>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className="mb-3"
            >
              <p className="article-card-info">Description:</p> {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
