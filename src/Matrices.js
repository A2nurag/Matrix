import React from "react";
import { Box } from "@mui/system";

export default function Matrices({
  id,
  color,
  top,
  left,
  colorId,
  state_1,
  state_2,
  state_3,
  state_4,
}) {
  const css = {
    bgcolor: `${colorId}`,
    border: "1px solid #ececec",
    display: "grid",
    placeItems: "center",
    fontSize: "30px",
    fontWeight: "bold",
  };
  return (
    <Box
      id={id}
      sx={{
        display: "grid",
        gridTemplateColumns: "75px 75px",
        gridTemplateRows: "75px 75px",
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
      }}
    >
      <Box sx={css}>{state_1}</Box>

      <Box sx={css}>{state_2}</Box>

      <Box sx={css}>{state_3}</Box>

      <Box sx={css}>{state_4}</Box>
    </Box>
  );
}
