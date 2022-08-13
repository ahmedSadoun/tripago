import React, { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending ,setIsPending]=useState(true)
    const [error, setError] = useState('');
    //useEffect is used to run a specific code once based on a specific condition
    useEffect(() => {
      const fetchTrips =async ()=>{
        try{

          const response = await fetch(url)
          if(!response.ok){
            throw new Error(response.statusText)
          }
          const json= await response.json();
          setData(json);
          setIsPending(false)
          setError(null)

        }catch (error){
          console.log(error)
          setError('Could not fetch the data ' )
          setIsPending(false)
        }
      };
      fetchTrips();
    }, [url ]);
  
    return{data : data ,isPending , error} }
