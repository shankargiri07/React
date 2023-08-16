import { useState, useEffect } from "react";

export function useFetchData()
{
    const [data, setData] = useState([{}])
    useEffect(() => {

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data);   
        });

    },[url])
    .catch((ex) => {
        console.error(ex)
    })
   return {data};
}