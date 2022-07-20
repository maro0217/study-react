import { useRouter } from 'next/router';
import {useEffect, useState} from 'react'


export const useBgColor = () => {
    const router = useRouter();

    const [count, setCount] = useState(1)

    const bgColor = useMemo(() => {
      return router.pathname === '/' ? "lightblue" : "beige"
    }, [router.pathname])

    useEffect(() => {
      console.log(`マウント時： ${count}`);
      document.body.style.backgroundColor = bgColor;
  
      return () => {
        console.log(`アンマウント時： ${count}`);
  
      document.body.style.backgroundColor = ""
  
      }
    }, [router.pathname]);
  }