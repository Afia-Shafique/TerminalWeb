import React from 'react'
import ApiFetchforMissions from './fetchMissions';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addMissions } from '../app/components/todo/todoSlice';
const Missions = () => {
  return (
  < button onClick={()=>dispatch(addMissions())}>Remove</button>
  )
}

export default Missions;