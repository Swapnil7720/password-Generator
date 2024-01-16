import React, { useState, useMemo, useEffect } from 'react';

    const generatePassword = (length, numberAllowed, charAllowed) => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+{}":><?~';

    for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
    }

  return pass;
};

const Cdemo = () => {

    console.log("c demo rendered")
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumbrAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);

  const generatedPassword = useMemo(() => generatePassword(length, numberAllowed, charAllowed), [
    length,
    numberAllowed,
   ]);

  useEffect(() => {
    // Additional side effects can be placed here if needed
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600">
        <h2 className="text-white mx-auto text-center py-2">Password Generator</h2>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={generatedPassword}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />

          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">

            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
              setNumbrAllowed((prev) => !prev);

              }}
            />
            <label 
            htmlFor="numberInput"
            > Numbers </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput"> Character </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cdemo;
