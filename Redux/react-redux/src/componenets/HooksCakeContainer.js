import React from 'react';
import { buy_cake } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

const HooksCakeContainer = (props) => {
  const numberOfCakes = useSelector(state => state.numberOfCakes)
  const dispatch = useDispatch()

  return (
    <>
    <div>CakeContainer</div>
    <h2> Number of Cakes - {numberOfCakes} </h2>
    <button onClick={()=> dispatch(buy_cake())}>Buy Cakes</button>
    </>
  )
}

export default HooksCakeContainer;