import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("Olive")
  return (
    <div  className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    > 
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2 '>  
      <button
       onClick={() => setColor("red")}
      
      className='outline-none px-4  py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"red"}}>Red</button>
     </div>
     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2 '>  
      <button
      onClick={()=>setColor("green")}
      className='outline-none px-4  py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"green"}}>Green</button>
     </div>
     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2 '>  
      <button 
      onClick={()=>setColor("blue")}
      className='outline-none px-4  py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"blue"}}>Blue</button>
     </div>
    </div>
    </div>
  )
}

export default App