import React from "react";
import { Alert, Button } from "@mui/material";

const ErrorFetch = ({ reload }) => {
  return (
    <Alert severity="error">
      Произошла ошибка!
      <Button onClick={reload} variant="contained" color="grey" sx={{ ml: 1 }}>
        Попробовать еще раз
      </Button>
    </Alert>
  );
};

export default ErrorFetch;
