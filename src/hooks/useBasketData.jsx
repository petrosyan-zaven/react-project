import { useState, useEffect } from "react";

const apiUrl = 'http://localhost:3000/basket'

export default function useBasketData() {
    const [ basket, setBasket ] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setBasket(data))
    },[])
    return {basket, setBasket}
}