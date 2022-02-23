import './App.css'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import MatrixController from './MatrixController'
import Matrices from './Matrices'
import CloseIcon from '@mui/icons-material/Close'

const App = () => {
  //red
  const [red1_1, setred1_1] = useState(0)
  const [red1_2, setred1_2] = useState(0)
  const [red1_3, setred1_3] = useState(0)
  const [red1_4, setred1_4] = useState(0)

  const [red2_1, setred2_1] = useState(0)
  const [red2_2, setred2_2] = useState(0)
  const [red2_3, setred2_3] = useState(0)
  const [red2_4, setred2_4] = useState(0)
  //blue
  const [blue1_1, setblue1_1] = useState(0)
  const [blue1_2, setblue1_2] = useState(0)
  const [blue1_3, setblue1_3] = useState(0)
  const [blue1_4, setblue1_4] = useState(0)

  const [blue2_1, setblue2_1] = useState(0)
  const [blue2_2, setblue2_2] = useState(0)
  const [blue2_3, setblue2_3] = useState(0)
  const [blue2_4, setblue2_4] = useState(0)
  //green
  const [green1_1, setgreen1_1] = useState(0)
  const [green1_2, setgreen1_2] = useState(0)
  const [green1_3, setgreen1_3] = useState(0)
  const [green1_4, setgreen1_4] = useState(0)

  const [green2_1, setgreen2_1] = useState(0)
  const [green2_2, setgreen2_2] = useState(0)
  const [green2_3, setgreen2_3] = useState(0)
  const [green2_4, setgreen2_4] = useState(0)
  //yellow
  const [yellow1_1, setyellow1_1] = useState(0)
  const [yellow1_2, setyellow1_2] = useState(0)
  const [yellow1_3, setyellow1_3] = useState(0)
  const [yellow1_4, setyellow1_4] = useState(0)

  const [yellow2_1, setyellow2_1] = useState(0)
  const [yellow2_2, setyellow2_2] = useState(0)
  const [yellow2_3, setyellow2_3] = useState(0)
  const [yellow2_4, setyellow2_4] = useState(0)

  const [maxZ, setMaxZ] = useState(9)
  const red = '#F05B5B',
    blue = '#51B8F2',
    green = '#6FCF97',
    yellow = '#F2C94C'

  const indicators = {
    position: 'absolute',
    zIndex: '9999',
    width: '35px',
    height: '35px',
    bgcolor: '#EEEEEE',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '50px',
    fontWeight: 'bold',
    pointerEvents: 'none',
  }

  const matrices = [
    {
      color: 'red-1',
      id: 'matrix-red-1-1',
      colorId: '#F05B5B',
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
      color: 'red-2',
      id: 'matrix-red-2-1',
      colorId: red,
      top: 375,
      left: 750,
      state_1: red2_1,
      state_2: red2_2,
      state_3: red2_3,
      state_4: red2_4,
      setState_1: setred2_1,
      setState_2: setred2_2,
      setState_3: setred2_3,
      setState_4: setred2_4,
      z: 2,
    },
    {
      color: 'blue-1',
      id: 'matrix-blue-1-1',
      colorId: blue,
      top: 0,
      left: 375,
      state_1: blue1_1,
      state_2: blue1_2,
      state_3: blue1_3,
      state_4: blue1_4,
      setState_1: setblue1_1,
      setState_2: setblue1_2,
      setState_3: setblue1_3,
      setState_4: setblue1_4,
      z: 3,
    },
    {
      color: 'blue-2',
      id: 'matrix-blue-2-1',
      colorId: blue,
      top: 750,
      left: 0,
      state_1: blue2_1,
      state_2: blue2_2,
      state_3: blue2_3,
      state_4: blue2_4,
      setState_1: setblue2_1,
      setState_2: setblue2_2,
      setState_3: setblue2_3,
      setState_4: setblue2_4,
      z: 4,
    },
    {
      color: 'green-1',
      id: 'matrix-green-1-1',
      colorId: green,
      top: 0,
      left: 750,
      state_1: green1_1,
      state_2: green1_2,
      state_3: green1_3,
      state_4: green1_4,
      setState_1: setgreen1_1,
      setState_2: setgreen1_2,
      setState_3: setgreen1_3,
      setState_4: setgreen1_4,
      z: 5,
    },
    {
      color: 'green-2',
      id: 'matrix-green-2-1',
      colorId: green,
      top: 750,
      left: 375,
      state_1: green2_1,
      state_2: green2_2,
      state_3: green2_3,
      state_4: green2_4,
      setState_1: setgreen2_1,
      setState_2: setgreen2_2,
      setState_3: setgreen2_3,
      setState_4: setgreen2_4,
      z: 6,
    },
    {
      color: 'yellow-1',
      id: 'matrix-yellow-1-1',
      colorId: yellow,
      top: 375,
      left: 0,
      state_1: yellow1_1,
      state_2: yellow1_2,
      state_3: yellow1_3,
      state_4: yellow1_4,
      setState_1: setyellow1_1,
      setState_2: setyellow1_2,
      setState_3: setyellow1_3,
      setState_4: setyellow1_4,
      z: 3,
    },
    {
      color: 'yellow-2',
      id: 'matrix-yellow-2-1',
      colorId: yellow,
      top: 750,
      left: 750,
      state_1: yellow2_1,
      state_2: yellow2_2,
      state_3: yellow2_3,
      state_4: yellow2_4,
      setState_1: setyellow2_1,
      setState_2: setyellow2_2,
      setState_3: setyellow2_3,
      setState_4: setyellow2_4,
      z: 4,
    },
  ]

  useEffect(() => {
    window.onbeforeunload = (e) => {
      return 'Data will be lost if you leave the page, are you sure?'
    }
  }, [])

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '4em' }}>
        <Box className='matrix-header'>
          <h1>MATRIX 2022</h1>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateRows: 'repeat(12, 75px)',
            gridTemplateColumns: 'repeat(12,75px)',
            position: 'relative',
            width: 'max-content',
            border: '1px solid #999999',
          }}
        >
          <Box sx={{ ...indicators, left: 'calc(50% - 17px)', top: '-17px' }}>
            N
          </Box>

          <Box
            sx={{ ...indicators, left: 'calc(50% - 17px)', bottom: '-17px' }}
          >
            S
          </Box>

          <Box sx={{ ...indicators, top: 'calc(50% - 17px)', right: '-17px' }}>
            E
          </Box>

          <Box sx={{ ...indicators, top: 'calc(50% - 17px)', left: '-17px' }}>
            W
          </Box>

          <Box sx={{ ...indicators, left: '-17px', top: '-17px' }}>NW</Box>

          <Box sx={{ ...indicators, left: '-17px', bottom: '-17px' }}>SW</Box>

          <Box sx={{ ...indicators, right: '-17px', top: '-17px' }}>NE</Box>

          <Box sx={{ ...indicators, right: '-17px', bottom: '-17px' }}>SE</Box>

          {new Array(144).fill(null).map((item, index) => (
            <Box sx={{ border: '1px solid #999999' }} key={index} />
          ))}
          <Box
            sx={{
              border: '1px solid #999999',
              width: '1100px',
              bgcolor: '#999999',
              height: '1px',
              transform: 'rotate(-33.5deg)',
              position: 'absolute',
              top: '450px',
              left: '-100px',
            }}
          />

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

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem',
          }}
        >
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

      <Box
        sx={{
          marginTop: '5rem',
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Button
          variant='contained'
          sx={{ bgcolor: `${red}`, color: 'black' }}
          onClick={() => {
            let ans = window.confirm('Do u want to end game for Red?')
            if (ans === false) return
            const red1 = document.querySelector('#matrix-red-1-1')
            const red2 = document.querySelector('#matrix-red-2-1')
            const red1_c = document.querySelector('#matrix-red-1-1-controller')
            const red2_c = document.querySelector('#matrix-red-2-1-controller')

            red1.style.opacity = '0.4'
            red1.style.zIndex = '0'
            red1_c.style.opacity = '0.4'
            red1_c.style.pointerEvents = 'none'

            red2.style.opacity = '0.4'
            red2.style.zIndex = '0'
            red2_c.style.opacity = '0.4'
            red2_c.style.pointerEvents = 'none'
          }}
        >
          <CloseIcon />
          End Game for Red
        </Button>

        <Button
          variant='contained'
          sx={{ bgcolor: `${blue}`, color: 'black' }}
          onClick={() => {
            let ans = window.confirm('Do u want to end game for blue?')
            if (ans === false) return
            const blue1 = document.querySelector('#matrix-blue-1-1')
            const blue2 = document.querySelector('#matrix-blue-2-1')
            const blue1_c = document.querySelector(
              '#matrix-blue-1-1-controller'
            )
            const blue2_c = document.querySelector(
              '#matrix-blue-2-1-controller'
            )

            blue1.style.opacity = '0.4'
            blue1.style.zIndex = '0'
            blue1_c.style.opacity = '0.4'
            blue1_c.style.pointerEvents = 'none'

            blue2.style.opacity = '0.4'
            blue2.style.zIndex = '0'
            blue2_c.style.opacity = '0.4'
            blue2_c.style.pointerEvents = 'none'
          }}
        >
          <CloseIcon />
          End Game for Blue
        </Button>

        <Button
          variant='contained'
          sx={{ bgcolor: `${green}`, color: 'black' }}
          onClick={() => {
            let ans = window.confirm('Do u want to end game for green?')
            if (ans === false) return
            const green1 = document.querySelector('#matrix-green-1-1')
            const green2 = document.querySelector('#matrix-green-2-1')
            const green1_c = document.querySelector(
              '#matrix-green-1-1-controller'
            )
            const green2_c = document.querySelector(
              '#matrix-green-2-1-controller'
            )

            green1.style.opacity = '0.4'
            green1.style.zIndex = '0'
            green1_c.style.opacity = '0.4'
            green1_c.style.pointerEvents = 'none'

            green2.style.opacity = '0.4'
            green2.style.zIndex = '0'
            green2_c.style.opacity = '0.4'
            green2_c.style.pointerEvents = 'none'
          }}
        >
          <CloseIcon />
          End Game for Green
        </Button>

        <Button
          variant='contained'
          sx={{ bgcolor: `${yellow}`, color: 'black' }}
          onClick={() => {
            let ans = window.confirm('Do u want to end game for yellow?')
            if (ans === false) return
            const yellow1 = document.querySelector('#matrix-yellow-1-1')
            const yellow2 = document.querySelector('#matrix-yellow-2-1')
            const yellow1_c = document.querySelector(
              '#matrix-yellow-1-1-controller'
            )
            const yellow2_c = document.querySelector(
              '#matrix-yellow-2-1-controller'
            )

            yellow1.style.opacity = '0.4'
            yellow1.style.zIndex = '0'
            yellow1_c.style.opacity = '0.4'
            yellow1_c.style.pointerEvents = 'none'

            yellow2.style.opacity = '0.4'
            yellow2.style.zIndex = '0'
            yellow2_c.style.opacity = '0.4'
            yellow2_c.style.pointerEvents = 'none'
          }}
        >
          <CloseIcon />
          End Game for Yellow
        </Button>
      </Box>
    </>
  )
}

export default App
