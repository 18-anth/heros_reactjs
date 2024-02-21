import React from "react";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ReturnButton() {
  const navigate = useNavigate();

  return (
    <Fab
      color="primary"
      aria-label="volver"
      onClick={() => navigate(-1)}
      style={{
        position: "fixed",
        background: "black",
        right: "20px",
        bottom: '20px',
    
      }}
    >
      <ArrowBackIcon />
    </Fab>
  );
}

export default ReturnButton;
