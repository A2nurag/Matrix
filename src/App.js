import './App.css'
import { Button } from '@mui/material'
import { bgcolor, Box } from '@mui/system'
import { useState } from 'react'
import { TextField } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'


const items = new Array(144).fill(null)
const App = _ => {
  //red
  const [team1, setTeam1] = useState([0, 0, 0, 0])
  const [team2, setteam2] = useState([0, 0, 0, 0])
  //blue
  const [team3, setteam3] = useState([0, 0, 0, 0])
  const [team4, setteam4] = useState([0, 0, 0, 0])
  //green
  const [team5, setteam5] = useState([0, 0, 0, 0])
  const [team6, setteam6] = useState([0, 0, 0, 0])
  //yellow
  const [team7, setteam7] = useState([0, 0, 0, 0])
  const [team8, setteam8] = useState([0, 0, 0, 0])

  const TeamsMatrices = _ => {
    return (
      <>
        {/* Red Team 1 */}
        
      </>)
  }

  const MatrixController = _ => {
    return (
      <>
      <Box className="controller-r1">
        <Box className="controller-main" sx={{ display: 'grid', gridTemplateColumns: '50px 30px 30px 50px', gridTemplateRows: '50px 30px 30px 50px 50px',gap:'2px' }}>

          <Button sx={{ gridRow: '1 / 2', gridColumn: '2 / 4', padding: '0', width: '60px', minWidth: '60px', height: '50px' }}><ArrowUpwardIcon /></Button>
          <Button sx={{ gridRow: '4 / 5', gridColumn: '2 / 4', padding: '0', width: '50px', minWidth: '60px', height: '50px' }}><ArrowDownwardIcon /></Button>
          <Button sx={{ gridRow: '2 / 4', gridColumn: '1 / 2', padding: '0', width: '50px', minWidth: '50px', height: '60px' }}><ArrowBackIcon /></Button>
          <Button sx={{ gridRow: '2 / 4', gridColumn: '4 / 5', padding: '0', width: '50px', minWidth: '50px', height: '60px' }}><ArrowForwardIcon /></Button>

          <Box sx={{ gridRow: '2 / 3', gridColumn: '2 / 3', bgcolor: '#EB5757', display: 'block' }}>
            <input type='text' id='red-1-1'
              onChange={() => {
                let currentState = team1
                currentState[0] = document.querySelector('#red-1-1').value
                setTeam1(currentState)
                console.log(team1)
              }}
              style={{ width: '30px', height: '30px', backgroundColor: 'transparent', border: 'none', fontSize: '20px',outline:'none' }}></input>
          </Box>
          
          <Box sx={{ gridRow: '2 / 3', gridColumn: '3 / 4', bgcolor: '#EB5757', display: 'block' }}>
          <input type='text' id='red-1-2'
              onChange={() => {
                let currentState = team1
                currentState[1] = document.querySelector('#red-1-2').value
                setTeam1(currentState)
                console.log(team1)
              }}
              style={{ width: '30px', height: '30px', backgroundColor: 'transparent', border: 'none', fontSize: '20px',outline:'none' }}></input>
          </Box>
          
          <Box sx={{ gridRow: '3 / 4', gridColumn: '2 / 3', bgcolor: '#EB5757', display: 'block' }}>
          <input type='text' id='red-2-1'
              onChange={() => {
                let currentState = team1
                currentState[2] = document.querySelector('#red-2-1').value
                setTeam1(currentState)
                console.log(team1)
              }}
              style={{ width: '30px', height: '30px', backgroundColor: 'transparent', border: 'none', fontSize: '20px',outline:'none' }}></input>
          </Box>
          
          <Box sx={{ gridRow: '3 / 4', gridColumn: '3 / 4', bgcolor: '#EB5757', display: 'block' }}>
          <input type='text' id='red-2-2'
              onChange={() => {
                let currentState = team1
                currentState[3] = document.querySelector('#red-2-2').value
                setTeam1(currentState)
                console.log(team1)
              }}
              style={{ width: '30px', height: '30px', backgroundColor: 'transparent', border: 'none', fontSize: '20px',outline:'none' }}></input>
          </Box>
          <h2 style={{ gridRow: '5 / 6', gridColumn: '1 / 5',margin:'auto'}}>Team Red 1</h2>
        </Box>
      </Box>

      
      </>
    )
  }

  return (
    <Box className='container' sx={{ display: 'flex', alignItems: 'center' }}>
      <Box className="matrix-header">
        <h1>MATRIX 2022</h1>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(12, 75px)', gridTemplateColumns: 'repeat(12,75px)', position: 'relative', width: 'max-content' }}>
        {items.map((item, index) => <Box sx={{ border: 1 }} key={index} />)}

        
      </Box>
      <MatrixController />
    </Box>
  )
}

export default App
