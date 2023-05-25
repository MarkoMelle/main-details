import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchServiceDetails } from "../features/servicesSlice";
import ErrorFetch from "./errorFetch";
import { useLocation, useParams } from 'react-router-dom';

import { Box, CircularProgress, Typography } from '@mui/material';

const ServicesDetails = () => {
  const { id } = useParams();
  const location = useLocation(); 
  const { details, loadingDetails, errorDetails } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  const reload = () => dispatch(fetchServiceDetails(id));

  useEffect(() => {
    dispatch(fetchServiceDetails(id));
  }, [dispatch, id]);

  return (
    <Box sx={{ m: 2 }}>
      {loadingDetails && <CircularProgress />}
      {errorDetails && <ErrorFetch reload={reload} url={location.pathname} />}
      {details && (
        <Box>
          <Typography variant="h5">{details.name}</Typography>
          <Typography variant="body1">{`Цена: ${details.price}`}</Typography>
          <Typography variant="body1">{details.content}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ServicesDetails;
