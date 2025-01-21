import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var miDiv;
  var loquesea = false;
  if(loquesea == true){
    miDiv=<div>es true</div>
  }else{
    miDiv=<div>es falso</div>
  }

  return(
    <>
      <p>Alejandro</p>
      <di>buenas</di>
      {miDiv}    
    </>
  )


}

export default App
