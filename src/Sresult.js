import React from 'react';

const Sresult=(props)=>{
    const img=`https://source.unsplash.com/400x500/?${props.name}`;
    return(
        <>
        <div>
            <img src={img} alt="not found"></img>
        </div>
        </>
    )
}

export default Sresult;