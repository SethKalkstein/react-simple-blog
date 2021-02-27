//all custom hooks must start with the word "use" in order to work
import { findAllByPlaceholderText } from "@testing-library/react";
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        
        const abortAction = new AbortController();

        setTimeout( () => {
            fetch(url, { signal: abortAction.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(dat => {
                setData(dat);
                setIsLoading(false);
                setError(null);
            })
            .catch( err => { 
                if(err.name === "AbortError")
                {
                    console.log("fetch aborted");
                } else{
                    setIsLoading(false);
                    setError(err.message) 
                }
            });
        }, 500);
    return () => abortAction.abort();
    }, [url] );

return {data, isLoading, error};

}

export default useFetch;