import React,{useEffect,useState} from "react";
const CountriesCard = ()=>{
    const [countries,setCountries]=useState([]);
    const fetchCountries= async ()=>{
        try{
            const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
            const jsonData = await response.json();
            setCountries(jsonData);
        }catch(error)
        {
            console.log(`Error fetching data:${error}`)
        }
    }
    
    useEffect(()=>{
        fetchCountries();
    },[])
    return(
        <div
        style={{
            display:"flex",
            gap:"5px",
            flexWrap:"wrap",
            justifyContent:"center",
        }}
        >
        {countries.map((country)=>(
            <div
            key={country}
       style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:"8px",
        border:"1px solid black",
        width:"200px",
        padding:"10px",
       }}
       >
        <img src={country.flag} alt="India flag" style={{height:"100px",width:"100px"}}/>
        <h3>{country.name}</h3>
       </div>
        ))}
        </div>
        
       
    )
}

export default CountriesCard;