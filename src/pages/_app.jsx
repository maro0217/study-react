import 'src/styles/globals.css'
import Head from "next/head"
import { useBgColor } from 'src/hooks/useBgColor'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'



//引数の分割代入
const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const  inputArray = useInputArray();

  useBgColor();

  return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* pagesの親みたいなもの。propsを渡したら各ページにpropsが渡される */}
        <Component {...pageProps} {...counter} {...inputArray}/>
      </>
      )
}

export default MyApp
