import React, { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    //useEffect is used to run a specific code once based on a specific condition
    useEffect(() => {
      const fetchTrips =async ()=>{
            const response = await fetch(url)
             const json= await response.json();
             setData(json);
      };
      fetchTrips();
    }, [url ]);
  
    return{data : data} }
