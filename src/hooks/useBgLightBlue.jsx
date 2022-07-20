import {useEffect, useState} from 'react'


export const useBgLightBlue = () => {
    const [count, setCount] = useState(1)

    useEffect(() => {
      console.log(`マウント時： ${count}`);
      document.body.style.backgroundColor = "lightblue"
  
      return () => {
        console.log(`アンマウント時： ${count}`);
  
      document.body.style.backgroundColor = ""
  
      }
    }, [count]);
  }