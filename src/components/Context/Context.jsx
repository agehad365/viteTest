 import React, { createContext, useState } from "react";

export const CounterContext = createContext();

export default function CounterContextProvider(props) {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState('ahmed');
 
  return (
    <CounterContext.Provider value={{ counter, setCounter, user, setUser}}>
      {props.children}
    </CounterContext.Provider>
  );
}
