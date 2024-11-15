import { useEffect, useState } from "react"

export const Fetch = ()=>{
    const [cat, setCat] = useState({})

    useEffect(()=>{
        fetch("https://api.thecatapi.com/v1/images/search")
            .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json(); // Convertir a JSON
            })
            .then((data) => {
            setCat(data[0]); // Actualizar el estado con los datos
       })    
    },[])
    return(
        <>
            <img src={cat.url} height="300" alt=""/>
        </>
    )
}
