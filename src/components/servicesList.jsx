import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchServices } from "../features/servicesSlice";
import ErrorFetch from "./errorFetch";
import {
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ServicesList = () => {
  const { items, loadingList, errorList } = useSelector(
    (state) => state.services
  );
  const dispatch = useDispatch();
  const location = useLocation();

  const reload = () => dispatch(fetchServices());

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <Box sx={{ m: 2 }}>
      {loadingList && <CircularProgress />}
      {errorList && <ErrorFetch reload={reload} url={location.pathname} />}
      {console.log(location.pathname)}
      {items && (
        <List>
          {items.map((o) => (
            <ListItem
              key={o.id}
              button
              component={Link}
              to={`/services/${o.id}/details`}
            >
              <ListItemText primary={o.name} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default ServicesList;
