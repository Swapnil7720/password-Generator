import React, { useCallback, useEffect, useRef, useState, useId } from 'react'

const Pass = () => {

    const passwordRef = useRef()

    const[password, setPassword] = useState('')
    const[length, setLength] = useState(5)
    const[numberAllowed, setNumberAllowed] = useState(false)
    const[charAllowed, setCharAllowed]= useState(false)

    const passwordGenerator = useCallback( ()=>{

        let pass = ' ';
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed) str += "0123456789"
        if(charAllowed) str+= "!@#$%^&*-_+=[]{}~`"

        for(let i =0; i< length; i++){

            let char = Math.floor( Math.random()  * str.length +  1)

            pass += str.charAt(char)

        }
        
        setPassword(pass);
        
        // console.log(password)

    }, [ length, charAllowed, numberAllowed]  );

    useEffect(()=>{
        passwordGenerator()
    },[ setPassword, length, charAllowed, numberAllowed] )

    const copyToClip=  useCallback(   () =>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.setSelectionRange(0 , 6  );
    }, [password] )
 
  return (

    <>
    <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600">
      <h2 className="text-white mx-auto text-center py-2">Password Generator</h2>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"   
          value={password}
          readOnly
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          ref={passwordRef}
        />

        <button onClick={copyToClip} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            onChange={(e)=>{
                setLength(e.target.value)
            }}
           
            className="cursor-pointer"
  
          />
          <label> Length : {length}</label>
        </div>

        <div className="flex items-center gap-x-1">

          <input
            type="checkbox"
            id="numberInput"
           onChange={()=>{
            setNumberAllowed( (prev)=> !prev    )
           }}   
          />
          <label 
          htmlFor="numberInput"
          > Numbers </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="charInput"
            onChange={()=>{
                setCharAllowed( (prev)=> !prev    )
               }} 
          />
          <label htmlFor="charInput"> Character </label>
        </div>
      </div>
    </div>
  </>
  )
}

export default Pass