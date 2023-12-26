import React from 'react';
import ApiFetchforRockets from './fetchRockets';

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addRockets } from '../app/components/todo/todoSlice';
const Rockets = () => {
  return (
    <div>
        {APIfectch}
        
        <button onClick={()=>dispatch(addRockets())}>Rockets Display</button>
        <button>Cancel reservation</button>
        <h1>List of Rockets</h1>
        <ul>
            
        </ul>
    </div>
  )
}

export default Rockets