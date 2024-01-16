import React, { useCallback, useState } from 'react'

const passwordGeneration = () => {

    const[length, setLength] = useState(5)
    const[numberAllowed, setNumberAllowed] = useState(false)
    const[charAllowed, setCharAllowed] =  useState(false)
    const[password, setPassword] = useState(null)

    const passwordGenerator = useCallback( ()=>{

        let pass = ''

        let str = 'abcedefghijklmnopqrstuvwxyz';

        if(numberAllowed) str += '0123456789';
        if(charAllowed) str+= '!@#$%^&*()_+=-{}:;?/><';


        for(let i =0; i<length; i++){

            let char = Math.floor(Math.random() * str.length);

            pass += str.charAt(char);

        } 

        setPassword(char);

        console.log(password)

    } , [] );
    passwordGenerator()
}

export default passwordGeneration