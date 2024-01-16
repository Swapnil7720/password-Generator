import React, { useCallback, useEffect, useRef, useState } from 'react'

const Demo = () => {
  
  const passRef = useRef()
  const[length, setLength] = useState(6)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState(" ")
  const[bgColor, setBgColor] = useState('')
  const [btn, setBtn] = useState("Copy")

  let colors = ['green' , 'red' , 'orange' ,'blue'  ];

  const passwordGenerator = useCallback(  ()=>{

                let pass = ''

                let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

                if(numberAllowed) str += "1234567890"
                if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

                for(let i =1; i<=length; i++){

                      let char = Math.floor( Math.random() * str.length + 1 )

                    pass += str.charAt(char)
                    setPassword(pass)
                    setBtn("Copy")
                }

  }, [length, numberAllowed, charAllowed, setPassword]  )

  useEffect(()=>{
        passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword] )

  const copyToClip = useCallback(  ()=> {

      passRef.current?.select()
      window.navigator.clipboard.writeText(password);
      passRef.current?.setSelectionRange(0 , 6  );

      setBtn("Copied")

       for(let i = 0 ; i< colors.length; i++){

        setBgColor( colors[i])
      }
  
   } ,[password] )

  return (

    <div  style={ {backgroundColor:  `  ${bgColor} `}}   className='flex justify-center mt- '>

      <div className=' bg-gray-400  max-w-xl p-5 '>
        <h3 className='text-center text-white my-3'  >Password Generator </h3>
        <div className='flex justify-center '>
          <input type="text"
           name="" 
           id="pass"
           className='p-1 w-full text-orange-500 '
           placeholder='Password'
           value={password}
           readOnly
           ref={passRef}
          />

            <button 
            onClick={copyToClip}
             className=' bg-blue-500  p-1'
             > {btn} </button>
        </div>

        <div className='flex justify-center align-middle gap-3 my-3' >

          <div>
          <input 
            type="range"
            name="" 
            id="range"
            value={length}
            min={4}
            max={50}
            onChange={ 
              (e)=>{
                setLength(e.target.value)
              }
            }
            />

            <label htmlFor="range"> Length {length}</label>

            </div>

            <div>
              <input 
                type="checkbox"
                name="" 
                id="num"
                onChange={
                  ()=>{
                    setNumberAllowed( (prev)=> !prev )
                  }
               }
                />
               
               <label htmlFor="num">Number</label>
          </div>
          <div>
                  <input 
                  type="checkbox"
                  name="" 
                  id="char"
                  onChange={
                    ()=>{
                      setCharAllowed((prev)=>  !prev )
                    }
                  }
                  />
                  <label htmlFor="char">Characters</label>
           </div>
        </div>
      </div>
  
    </div>
  )
}

export default Demo