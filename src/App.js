import './App.css';
import { useState } from 'react';
import Triplist from './components/TripList'
function App() {
 const  [showTrips,setShowTrips]=useState(true)
  const onClickHandler = ()=>{
    
    setShowTrips(!showTrips)
  }
  return (
    <div >
      <button onClick={()=>onClickHandler()}>Hide Trips</button>
     {showTrips && <Triplist/>}
    </div>
  );
}

export default App;
 