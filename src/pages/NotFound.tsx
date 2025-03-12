import { Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { RoutesEnum } from "../routes";

import "./NotFound.css"

export const NotFound = () => {
  return (
    <Container className="notFoundContainer">
      <Typography variant="h3" color="error">
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button variant="contained" component={Link} to={RoutesEnum.HOME}>
        Go Home
      </Button>
    </Container>
  );
};
