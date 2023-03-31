import React, { useState } from 'react'

export const Hooksex = () => {
    const[name,Putname] =useState("Gnaneshwar")
  return (
    <div>
        <h1>
            My Name is {name}
        </h1>
        <button onClick={()=>Putname("Prabhas")}>Click</button>
    </div>
  )
}
