import 'src/styles/globals.css'
import Head from "next/head"



//引数の分割代入
const MyApp = ({ Component, pageProps }) => {


  return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* pagesの親みたいなもの。propsを渡したら各ページにpropsが渡される */}
        <Component {...pageProps}/>
      </>
      )
}

export default MyApp
