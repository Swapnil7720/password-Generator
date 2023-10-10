import React, { useCallback, useEffect, useState, useRef } from 'react';

const Pass = () => {

    console.log("Pass component render ")

    const[length, setLength] = useState(8)

    const[ numberAllowed, setNumbrAllowed] = useState(true)

    const[ charAllowed, setCharAllowed] = useState(true)
     
    const[ password, setPassword] = useState("")


    const passWordRef  = useRef( null)


    const PasswordGenerator =  useCallback(()=>{

        let pass = '';
        
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if(numberAllowed) str += "1234567890";

        if(charAllowed) str += "!@#$%^&*()_+{}:><?~";

            for (let i = 1; i <= length; i++) {

                let char = Math.floor( Math.random() * str.length + 1 );

                       pass +=  str.charAt(char)

                //  console.log(pass);
            }

            setPassword(pass)

}  ,[length, numberAllowed, charAllowed, setPassword, password] )  


            useEffect( ()=>{

                PasswordGenerator();

            }, [length, numberAllowed, charAllowed, setPassword]);

            const copyToClipBoard =   useCallback( () =>{

                passWordRef.current?.select()

                window.navigator.clipboard.writeText(password)
            },[password]  )
    
  return (
    

    <>

    <div className='p-5 bg-slate-500 w-3/6  text-center  justify-center m-auto my-10 '>

            <h2 className='text-white'> Password Generator</h2>
        <div className='  justify-center align-middle' >

            <div className=' flex w-full'>
            <input type="text" 

            value={password}
            className='outline-none w-full  text-orange-500 py-1 px-3'
            placeholder="Password"
            readOnly
            ref={passWordRef}
             />

             <button  onClick={copyToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
              Copy
             </button>

               {/* <button className=' bg-blue-500 p-2'> Copy</button> */}
            </div>

            <div  className='flex justify-center align-middle gap-3 text-orange-400' >
                <input onChange={ (e)=> setLength(e.target.value)} type="range" min={4} max={20} />

                <label > length : {length}</label>

                <div>
                    <input type="checkbox"     onChange={ ()=> {
                         setNumbrAllowed( (prev)=> !prev);

                         }} id='number'

                         defaultChecked= {numberAllowed}

                        />

                    <label htmlFor="number" > Numbers</label>
                </div>
                <div>
                    <input type="checkbox"  
                    id='Character' 

                    defaultChecked = {charAllowed}
                    
                    onChange={ ()=> {
                        setCharAllowed( (prev)=> !prev);
                    
                   }}
                   /> 
                    <label htmlFor="Character"> Character</label>
                </div>
            </div>

            


        </div>

    </div>


    
    </>
  )
}

export default Pass