import "./App.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function MatrixController({
  color,
  colorId,
  idOfMatrix,
  state_1,
  state_2,
  state_3,
  state_4,
  setState_1,
  setState_2,
  setState_3,
  setState_4,
  z,
  setZ,
}) {
  //color of format red-1
  const inputCss = {
    width: "50px",
    height: "50px",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "20px",
    fontWeight: "bold",
    outline: "none",
    color: "#000",
  };

  const onChangeHandler = (state, setState, id) => {
    let currentState = document.querySelector(id).value;
    setState(currentState);
  };

  const onClickHandler = (id, top, left) => {
    let matrix = document.querySelector(`#${id}`);
    let currentTop = parseInt(getComputedStyle(matrix).getPropertyValue("top"));
    let currentLeft = parseInt(
      getComputedStyle(matrix).getPropertyValue("left")
    );

    let newLeft = currentLeft + left;
    let newTop = currentTop + top;

    if (newTop >= 0 && newTop <= 750) matrix.style.top = `${newTop}px`;
    if (newLeft >= 0 && newLeft <= 750) matrix.style.left = `${newLeft}px`;
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "50px 50px 50px 50px",
        gridTemplateRows: "50px 50px 50px 50px 50px",
        gap: "2px",
      }}
      onClick={() => {
        let m = document.querySelector(`#${idOfMatrix}`);
        m.style.zIndex = z;
        setZ(z + 1);
      }}
    >
      {/* Up */}
      <Button
        sx={{
          gridRow: "1 / 2",
          gridColumn: "2 / 4",
          padding: "0",
          width: "100px",
          minWidth: "100px",
          height: "50px",
          color: `${colorId}`,
        }}
        onClick={() => onClickHandler(idOfMatrix, -75, 0)}
      >
        <ArrowUpwardIcon />
      </Button>

      {/* Down */}
      <Button
        sx={{
          gridRow: "4 / 5",
          gridColumn: "2 / 4",
          padding: "0",
          width: "50px",
          minWidth: "100px",
          height: "50px",
          color: `${colorId}`,
        }}
        onClick={() => onClickHandler(idOfMatrix, 75, 0)}
      >
        <ArrowDownwardIcon />
      </Button>

      {/* Left */}
      <Button
        sx={{
          gridRow: "2 / 4",
          gridColumn: "1 / 2",
          padding: "0",
          width: "50px",
          minWidth: "50px",
          height: "100px",
          color: `${colorId}`,
        }}
        onClick={() => onClickHandler(idOfMatrix, 0, -75)}
      >
        <ArrowBackIcon />
      </Button>

      {/* Right */}
      <Button
        sx={{
          gridRow: "2 / 4",
          gridColumn: "4 / 5",
          padding: "0",
          width: "50px",
          minWidth: "50px",
          height: "100px",
          color: `${colorId}`,
        }}
        onClick={() => onClickHandler(idOfMatrix, 0, 75)}
      >
        <ArrowForwardIcon />
      </Button>

      {/* Matrix */}
      {/* 0,0 */}
      <Box
        sx={{
          gridRow: "2 / 3",
          gridColumn: "2 / 3",
          bgcolor: `${colorId}`,
          display: "block",
        }}
      >
        <input
          type="number"
          id={`${color}-1`}
          style={inputCss}
          defaultValue={state_1}
          onChange={() => {
            onChangeHandler(state_1, setState_1, `#${color}-1`);
          }}
        />
      </Box>

      {/* 0,1 */}
      <Box
        sx={{
          gridRow: "2 / 3",
          gridColumn: "3 / 4",
          bgcolor: `${colorId}`,
          display: "block",
        }}
      >
        <input
          type="number"
          id={`${color}-2`}
          style={inputCss}
          defaultValue={state_2}
          onChange={() => {
            onChangeHandler(state_2, setState_2, `#${color}-2`);
          }}
        />
      </Box>

      {/* 1,0 */}
      <Box
        sx={{
          gridRow: "3 / 4",
          gridColumn: "2 / 3",
          bgcolor: `${colorId}`,
          display: "block",
        }}
      >
        <input
          type="number"
          id={`${color}-3`}
          style={inputCss}
          onChange={() => {
            onChangeHandler(state_3, setState_3, `#${color}-3`);
          }}
          defaultValue={state_3}
        />
      </Box>

      {/* 1,1 */}
      <Box
        sx={{
          gridRow: "3 / 4",
          gridColumn: "3 / 4",
          bgcolor: `${colorId}`,
          display: "block",
        }}
      >
        <input
          type="number"
          id={`${color}-4`}
          style={inputCss}
          defaultValue={state_4}
          onChange={() => {
            onChangeHandler(state_4, setState_4, `#${color}-4`);
          }}
        />
      </Box>
      <h3
        style={{
          gridRow: "5 / 6",
          gridColumn: "1 / 5",
          margin: "auto",
          color: `${colorId}`,
        }}
      >
        TEAM {color.toUpperCase()}
      </h3>
    </Box>
  );
}
