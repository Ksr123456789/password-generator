import React, {useCallback, useEffect, useState} from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState("");
  const [NumAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);

  const generatePassword =useCallback(
    ()=>{
      let pass = `ABCDEDGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
      if(NumAllowed){
        pass += `0123456789`;
      }
      if(charAllowed){
        pass += `!@#$%^&*()_+{}|;:>,</?`;
      }
      let ans = "";
      for(let i=1 ;i<=length; i++){
        let ind = Math.floor(Math.random()*pass.length);
        ans += pass[ind];
      }
      setPassword(ans);
    },[NumAllowed, charAllowed, length]
  )
  useEffect(()=>{
    generatePassword();
  },[length, charAllowed, NumAllowed])

  

  return (
   <>
   <div>
    <div>
      <h1>password-generator</h1>
    </div>
    <div>
      <input 
      type="text" 
      value={password}
      readOnly
      />
      <button onClick={generatePassword}>generate</button>
    </div>
    <div>
      <div>
        <input
         type="range" 
         id='length' 
         min={6}
         max={50}
         value={length}
         onChange={(e)=>setLength(e.target.value)}
         />
        <label htmlFor="length">{length}: length</label>
      </div>
      <div>
        <input 
        type="checkbox" 
        checked={NumAllowed}
        id='num'
        onChange={()=>setNumAllowed(prev => !prev)}
        />
        <label htmlFor="num">number</label>
      </div>
      <div>
        <input 
        type='checkbox'
        id='char'
        checked = {charAllowed}
        onChange={()=> setCharAllowed(prev => !prev)}
        />
        <label htmlFor="char">character</label>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
