import React ,{useState}from 'react'
import { Box } from '@mui/material'
import Herobanner from '../Herobanner'
import SearchExercises from '../SearchExercises'
import Exerciese from '../Exerciese'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
       <Herobanner/>
       <SearchExercises setExercises={setExercises}  bodyPart={bodyPart} setBodyPart={setBodyPart} />
       <Exerciese setExercises={setExercises}  bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home