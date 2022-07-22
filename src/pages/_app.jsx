import "tailwindcss/tailwind.css";
import Head from "next/head"
import { Layout } from 'src/components/Layout'



//引数の分割代入
const MyApp = ({ Component, pageProps }) => {


  return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </>
      )
}

export default MyApp
