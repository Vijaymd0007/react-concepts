
import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [counter1,setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(0)
    const Incremental =()=>{
        setCounter1(counter1+1)
    }
    const IsEven=useMemo(()=>{
        let i=0
        while(i<2000000000)i++
        return counter1%2==0
    },[counter1])
    
    const Incremental2 =()=>{
        setCounter2(counter2+1)
    }
  return (
    <div>
        <button onClick={Incremental}>Increment</button>
        <h3>{IsEven?"Even":"Odd"}   -   Counter1 - {counter1}</h3>
        <button onClick={Incremental2}>Increment</button>
        <h3>Counter2 - {counter2}</h3>
    </div>
  )
}

export default UseMemo