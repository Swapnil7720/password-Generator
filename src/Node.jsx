  import React, { useCallback, useState } from 'react'

  const Node = () => {

    const[password, setPassword] = useState('');
    const[length, setLength] = useState(2)
    const[numAllowed, setNumAllowed] = useState(false)
    const[charAllowed, setCharAllowed] = useState(false)

    const PasswordGenerator = useCallback( ()=>{

            let pass = '';
            let str = 'abcdefghijklmnopqrstuvzxyz';

            if(charAllowed) str += '!@#$%^&*()_{}[]|;:';
            if(numAllowed) str += '0123456789';
            for(let i =0; i< length; i++ ){ 

              let char = Math.floor(Math.random() * length );

              pass +=  str.charAt(char);
              setPassword(pass)

            }
            console.log(password)

    }, [setCharAllowed, numAllowed]   )

    
    return (
      <div className='flex justify-center align-middle  h-screen'>   


          
        <button className='bg-orange-500  '>  Generate Password   </button>
        

      </div>
    )
  }

  export default Node