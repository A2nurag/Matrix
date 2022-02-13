import "./App.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import MatrixController from "./MatrixController";
import Matrices from "./Matrices";

const App = () => {
  //red
  const [red1_1, setred1_1] = useState(0);
  const [red1_2, setred1_2] = useState(0);
  const [red1_3, setred1_3] = useState(0);
  const [red1_4, setred1_4] = useState(0);

  const [red2_1, setred2_1] = useState(0);
  const [red2_2, setred2_2] = useState(0);
  const [red2_3, setred2_3] = useState(0);
  const [red2_4, setred2_4] = useState(0);
  //blue
  const [blue1_1, setblue1_1] = useState(0);
  const [blue1_2, setblue1_2] = useState(0);
  const [blue1_3, setblue1_3] = useState(0);
  const [blue1_4, setblue1_4] = useState(0);

  const [blue2_1, setblue2_1] = useState(0);
  const [blue2_2, setblue2_2] = useState(0);
  const [blue2_3, setblue2_3] = useState(0);
  const [blue2_4, setblue2_4] = useState(0);
  //green
  const [green1_1, setgreen1_1] = useState(0);
  const [green1_2, setgreen1_2] = useState(0);
  const [green1_3, setgreen1_3] = useState(0);
  const [green1_4, setgreen1_4] = useState(0);

  const [green2_1, setgreen2_1] = useState(0);
  const [green2_2, setgreen2_2] = useState(0);
  const [green2_3, setgreen2_3] = useState(0);
  const [green2_4, setgreen2_4] = useState(0);
  //yellow
  const [yellow1_1, setyellow1_1] = useState(0);
  const [yellow1_2, setyellow1_2] = useState(0);
  const [yellow1_3, setyellow1_3] = useState(0);
  const [yellow1_4, setyellow1_4] = useState(0);

  const [yellow2_1, setyellow2_1] = useState(0);
  const [yellow2_2, setyellow2_2] = useState(0);
  const [yellow2_3, setyellow2_3] = useState(0);
  const [yellow2_4, setyellow2_4] = useState(0);

  const [maxZ, setMaxZ] = useState(9);
  const red = "#F05B5B",
    blue = "#51B8F2",
    green = "#6FCF97",
    yellow = "#F2C94C";

  const matrices = [
    {
      color: "red-1",
      id: "matrix-red-1-1",
      colorId: "#F05B5B",
      top: 0,
      left: 0,
      state_1: red1_1,
      state_2: red1_2,
      state_3: red1_3,
      state_4: red1_4,
      setState_1: setred1_1,
      setState_2: setred1_2,
      setState_3: setred1_3,
      setState_4: setred1_4,
      z: 1,
    },
    {
      color: "blue-1",
      id: "matrix-blue-1-1",
      colorId: "#51B8F2",
      top: 750,
      left: 750,
      state_1: blue1_1,
      state_2: blue1_2,
      state_3: blue1_3,
      state_4: blue1_4,
      setState_1: setblue1_1,
      setState_2: setblue1_2,
      setState_3: setblue1_3,
      setState_4: setblue1_4,
      z: 2,
    },
    {
      color: "red-1",
      id: "matrix-red-1-1",
      colorId: "#F05B5B",
      top: 750,
      left: 0,
      state_1: red1_1,
      state_2: red1_2,
      state_3: red1_3,
      state_4: red1_4,
      setState_1: setred1_1,
      setState_2: setred1_2,
      setState_3: setred1_3,
      setState_4: setred1_4,
      z: 3,
    },
    {
      color: "blue-1",
      id: "matrix-blue-1-1",
      colorId: "#51B8F2",
      top: 750,
      left: 750,
      state_1: blue1_1,
      state_2: blue1_2,
      state_3: blue1_3,
      state_4: blue1_4,
      setState_1: setblue1_1,
      setState_2: setblue1_2,
      setState_3: setblue1_3,
      setState_4: setblue1_4,
      z: 2,
    },
    {
      color: "blue-1",
      id: "matrix-blue-1-1",
      colorId: "blue",
      top: 750,
      left: 750,
      state_1: blue1_1,
      state_2: blue1_2,
      state_3: blue1_3,
      state_4: blue1_4,
      setState_1: setblue1_1,
      setState_2: setblue1_2,
      setState_3: setblue1_3,
      setState_4: setblue1_4,
      z: 2,
    },
    {
      color: "red-1",
      id: "matrix-red-1-1",
      colorId: "red",
      top: 750,
      left: 0,
      state_1: red1_1,
      state_2: red1_2,
      state_3: red1_3,
      state_4: red1_4,
      setState_1: setred1_1,
      setState_2: setred1_2,
      setState_3: setred1_3,
      setState_4: setred1_4,
      z: 3,
    },
    {
      color: "blue-1",
      id: "matrix-blue-1-1",
      colorId: "blue",
      top: 750,
      left: 750,
      state_1: blue1_1,
      state_2: blue1_2,
      state_3: blue1_3,
      state_4: blue1_4,
      setState_1: setblue1_1,
      setState_2: setblue1_2,
      setState_3: setblue1_3,
      setState_4: setblue1_4,
      z: 2,
    },
    {
      color: "blue-1",
      id: "matrix-blue-1-1",
      colorId: "blue",
      top: 750,
      left: 750,
      state_1: blue1_1,
      state_2: blue1_2,
      state_3: blue1_3,
      state_4: blue1_4,
      setState_1: setblue1_1,
      setState_2: setblue1_2,
      setState_3: setblue1_3,
      setState_4: setblue1_4,
      z: 2,
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: "4em" }}>
        <Box className="matrix-header">
          <h1>MATRIX 2022</h1>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(12, 75px)",
            gridTemplateColumns: "repeat(12,75px)",
            position: "relative",
            width: "max-content",
            border: "1px solid #999999",
            overflow: "hidden",
          }}
        >
          {new Array(144).fill(null).map((item, index) => (
            <Box sx={{ border: "1px solid #999999" }} key={index} />
          ))}

          {matrices.map(
            ({
              id,
              top,
              left,
              right,
              colorId,
              state_1,
              state_2,
              state_3,
              state_4,
              z,
            }) => (
              <Matrices
                id={id}
                top={top}
                left={left}
                colorId={colorId}
                state_1={state_1}
                state_2={state_2}
                state_3={state_3}
                state_4={state_4}
                z={z}
              />
            )
          )}
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {matrices.map(
            ({
              color,
              colorId,
              id,
              state_1,
              state_2,
              state_3,
              state_4,
              setState_1,
              setState_2,
              setState_3,
              setState_4,
              z,
            }) => (
              <MatrixController
                color={color}
                colorId={colorId}
                idOfMatrix={id}
                state_1={state_1}
                state_2={state_2}
                state_3={state_3}
                state_4={state_4}
                setState_1={setState_1}
                setState_2={setState_2}
                setState_3={setState_3}
                setState_4={setState_4}
                z={maxZ}
                setZ={setMaxZ}
              />
            )
          )}
        </Box>
      </Box>
    </>
  );
};

export default App;
