import "tailwindcss/tailwind.css";
import Head from "next/head"
import { AppLayout } from 'src/layouts/AppLayout'
import { SWRConfig } from "swr";



//引数の分割代入
const MyApp = ({ Component, pageProps }) => {

  const fetcher = async (...args) => {
    const res = await fetch(...args);
    const json = await res.json();
    return json;
  }

  return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SWRConfig value={{ fetcher }}>
          <AppLayout>
            <Component {...pageProps}/>
          </AppLayout>
        </SWRConfig>
      </>
      )
}

export default MyApp
