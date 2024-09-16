import React, { useState,useEffect } from 'react';
import {PokeCards}  from './pokeCards';
import '../style/pokemon.css'
export const Pokemon = () => {
const[apix,setApix]=useState([]);
const[loading,setLoading]=useState(null);
const[error,setError]=useState(null);
const[search,setSearch]=useState("")

const API="https://pokeapi.co/api/v2/pokemon?limit=124";
const getPokemon=async()=>{
  try {
    const res= await fetch(API);
    const data=await res.json();
   const detailData=data.results.map(async(curData)=>{
    const res= await fetch(curData.url);
    const data=await res.json();
    return data;
   })
   const detailres=await Promise.all(detailData);
   setApix(detailres);
   setLoading(false);
  } catch (error) {
    setError(error);
    setLoading(false);
  }
}
useEffect(() => {
  getPokemon();
}, []);
const searchData = apix.filter((curPokemon) =>
  curPokemon.name.toLowerCase().includes(search.toLowerCase())
);
if(loading)
{
  return(
    <div>
      <h1>Loading</h1>
    </div>
  );
}
if(error)
  {
    return(
      <div>
        <h1>Error</h1>
      </div>
    )
  }

  return (
<section className='container'>
  <header>
    <h1>Lets Catch Pokemon</h1>
  </header>
  <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
  <div>
  <ul className='cards'>
   {searchData.map((curPoke)=>{
    return(
      <PokeCards key={curPoke.id} data={curPoke}/>
    )
   })}
  </ul>
  </div>
</section>
  )
}
