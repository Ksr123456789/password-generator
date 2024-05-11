import React, {useEffect, useState} from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState("");
  const [NumAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);

  const generatePassword = ()=>{
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
    }
  useEffect(()=>{   // this useeffect will generate password on first render and when its dependencies will change
    generatePassword();
  },[length, charAllowed, NumAllowed])

  

  return (
   <>
   <div className='container'>
    <div className='sub-container'>
    <div>
      <h1>password-generator</h1>
    </div>
    <div className='displayer'>
      <input 
      type="text" 
      value={password}
      readOnly
      />
      <button onClick={generatePassword}>generate</button> {/*we added this button if we want to generate my different password of same length with same charallowed and numallowed */}
    </div>
    <div className='parameters'>
      <div className='len'>
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
      <div className='num'>
        <input 
        type="checkbox" 
        checked={NumAllowed}
        id='num'
        onChange={()=>setNumAllowed(prev => !prev)}
        />
        <label htmlFor="num">number</label>
      </div>
      <div className='.char'>
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
   </div>
   </>
  )
}

export default App
