import  { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");
  //useEffect is used to run a specific code once based on a specific condition
  //it is always a best practice if we are doing something async inside to use the clean up function
  useEffect(() => {
    console.log('use Effect')
    const controller = new AbortController();
    const fetchTrips = async () => {
      try {
        console.log('inside try 1')
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          console.log("response.statusText")
          throw new Error(response.statusText);
        }
        const json = await response.json();
        console.log('inside try 2')
        setData(json);
        setIsPending(false);
        setError(null);
        console.log('inside try 3')

      } catch (error) {
        if (error.name === "AbortError") {
          console.log("The fetch was aborted");
        }else{
          console.log(error);
          setError("Could not fetch the data ");
          setIsPending(false);
        }
       
      }
    };
    fetchTrips();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data: data, isPending, error };
}
