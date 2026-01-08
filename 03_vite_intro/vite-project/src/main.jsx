import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// jsx format
const heading = <div> <h1>hello world</h1></div>
console.log(heading);




createRoot(document.getElementById('root')).render(
  <StrictMode>
   {heading}
   {heading}
   {heading}
   {heading}
   {heading}
  </StrictMode>
  ,
)
