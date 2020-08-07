import React, { useState } from 'react';
import Sresult from './Sresult';

const Search=()=>{

  const [img,setimg]=useState("");

  const Ievent=(event)=>{

    const e=event.target.value;
    setimg(e);
  }
  return(
    <>
    <div className="sbar">
        <input type="text" placeholder="Search" value={img} onChange={Ievent}/>
        
        {img ==="" ? null :<Sresult name={img}/>}
        </div>
    </>
  )
}

export default Search;