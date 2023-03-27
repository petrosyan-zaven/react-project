
import { useState, useEffect } from "react";

const apiUrl = "http://localhost:3000/" ;

export default function useGameData() {

    const [data, setData] = useState();

    useEffect(()=>{
      fetch(apiUrl)
        .then(result => result.json())
        .then(data => setData(data))
    },[])
    return data;
}