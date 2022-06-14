import React ,{useState}from 'react'
import { Box } from '@mui/material'
import Herobanner from '../Herobanner'
import SearchExercises from '../SearchExercises'
import Exercises from '../Exercises'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
       <Herobanner/>
       <SearchExercises setExercises={setExercises}  bodyPart={bodyPart} setBodyPart={setBodyPart} />
       <Exercises setExercises={setExercises}  bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home