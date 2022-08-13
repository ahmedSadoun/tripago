import React, { useState } from "react";
import './TripList.css'
import useFetch from "../hooks/useFetch.js";
export default function Triplist() {
  // const [trips, setTrips] = useState([]);
  const [url,setUrl]=useState("http://localhost:3000/trips")
  const {data : trips} = useFetch(url);

  // const fetchTrips=useCallback(async()=>{
  //  const response = await fetch(url)
  //   const json= await response.json();
  //   setTrips(json);
      
  // } , [url])
  // //useEffect is used to run a specific code once based on a specific condition
  // useEffect(() => {
  //   fetchTrips();
  // }, [fetchTrips ]);
  // // console.log("the trips are : "  + trips);

  return (
    <div className="trip-list">
        <h1> Trip List </h1>
      <ul>
        {trips &&
          (
          trips.map((trip)=>(
            <li key={trip.id}>
              <h3 >{trip.title}</h3>
              <p>{trip. price}</p>

            </li>
          ))
         
        )}
        <div className="filters">
          <button onClick={()=>setUrl("http://localhost:3000/trips?loc=europe")}>
            Europen Trips 
          </button>
          <button onClick={()=>setUrl("http://localhost:3000/trips")}>

            All Trips
          </button>
        </div>
      </ul>
    </div>
  );
}
