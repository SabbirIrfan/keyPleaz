import React from 'react';
import {buy_cake} from '../redux/cakeStore/cakeActions'
import { connect } from 'react-redux';

const CakeContainer = (props) => {
  return (
    <>
    <div>CakeContainer</div>
    <h2> Number of Cakes - {props.numberOfCakes} </h2>
    <button onClick={props.buy_cake}>Buy Cakes</button>
    </>
  )
}




const mapStateToProps = state => {
  console.log(state.numberOfCakes)
    return {
      numberOfCakes : state.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buy_cake : () => dispatch(buy_cake())
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)