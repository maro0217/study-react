import {useCallback, useState} from 'react'


export const useInputArray = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);
  
    const textInput = useCallback((e) => {
      setText(e.target.value);
  
    });
    
    const handleAdd = useCallback(() => {
        setArray((prevArray) =>{
          if(prevArray.includes(text)) {
            alert("同じテキストがすでに存在します")
            return prevArray;
          }
          const newArray = [...prevArray, text];
          return newArray;
        } )
      }, [text])
    
      return {text, array, handleAdd, textInput};
    
    }
  
  