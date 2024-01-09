import { useState } from "react";
import { products } from "../mocks/products.json";

export default function useFetch(products) {
    const [data, setData] = useState(null);
    
    async function fetchData() {
        const response = await fetch();
        const json = await response.json();
        setData(json);
    }
    
    return [data, fetchData];
    }