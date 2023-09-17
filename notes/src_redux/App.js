import React from 'react';
import {connect} from 'react-redux';
import {incplayerone,decplayerone,incplayertwo,decplayertwo,incplayeroneown,incplayertwoown} from './Actions'

const App = ({playerone,playertwo,incplayerone,decplayerone,incplayertwo,decplayertwo,incplayeroneown,incplayertwoown}) => {
  return (
    <div>
      <center>
        <h3>Playerone Details</h3>
        <p>Name: {playerone.name} | {' '} Score: {playerone.score}</p>
          <button onClick={()=>incplayerone()}>Increment</button>
          <button onClick={()=>decplayerone()}>Decrement</button>
          <input type="number" onKeyDown={(e)=> {
 if (e.keyCode === 13) { // Check if the Enter key was pressed
  e.preventDefault(); // Prevent the default behavior (form submission)
   const inputValue = e.target.value;
    if (inputValue === "") {
      incplayeroneown(0);
     } else {
   const parsedValue = parseInt(inputValue);
    if (!isNaN(parsedValue)) {
      incplayeroneown(parsedValue);
      }
    }
   }
 }}/>

        <h3>Playertwo Details</h3>
        <p>Name: {playertwo.name} | {' '} Score: {playertwo.score}</p>
          <button onClick={()=>incplayertwo()}>Increment</button>
          <button onClick={()=>decplayertwo()}>Decrement</button>
          <input type="number" onKeyDown={(e)=> {
 if (e.keyCode === 13) { // Check if the Enter key was pressed
  e.preventDefault(); // Prevent the default behavior (form submission)
   const inputValue = e.target.value;
    if (inputValue === "") {
      incplayertwoown(0);
     } else {
   const parsedValue = parseInt(inputValue);
    if (!isNaN(parsedValue)) {
      incplayertwoown(parsedValue);
      }
    }
   }
 }}/>

      </center>
    </div>
  )
}
const mapStateToProps = state =>({
  playerone : state.playerone,
  playertwo : state.playertwo
})
/* you want to mapStateToProps in app by using props */
export default connect(mapStateToProps, {incplayerone, decplayerone,incplayertwo, decplayertwo,incplayeroneown,incplayertwoown})(App)
//export default connect(mapStateToProps,mapDispatchToProps)(App)
/* In connect statement we have to pass two arrugements 
mapStateToProps: we can access all our state values
mapDispatchToProps: we can access all our actions
 */
