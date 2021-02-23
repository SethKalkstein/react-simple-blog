//all custom hooks must start with the word "use" in order to work
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () =>  setTimeout( () => {
        fetch(url)
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
            setIsLoading(false);
            setError(err.message) 
        });
    }, 2000)
, [url] );

return {data, isLoading, error};

}

export default useFetch;