import {useCallback, useState} from 'react'


export const useCounter = () => {
    const [count, setCount] = useState(1)
    const [isShow, setIsShow] = useState(true)
  
    const handleClick = useCallback(() => {
      if (count < 10) {
        setCount(count => count + 1);
        setCount(count => count + 1);
      }
  
    }, [count])
  
    const showChange = useCallback(() => {
      setIsShow(previsShow => !previsShow)
  
    }, [])
  
    return {count, isShow, handleClick, showChange}
  }
  