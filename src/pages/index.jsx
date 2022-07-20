import Head from 'next/head'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import { useBgLightBlue } from 'src/hooks/useBgLightBlue'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import styles from 'src/styles/Home.module.css'






export default function Home() {
  const {count, isShow, handleClick, showChange} = useCounter();
  const  {text, array, handleAdd, textInput} = useInputArray();

  useBgLightBlue();
  
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className={styles.header}/>

      {isShow ? <h1>{count}</h1> : null}
      <button href='/about' onClick={handleClick}>
        ボタン
      </button>
      <button onClick={showChange}>
        {isShow ? "非表示" : "表示"}
      </button>

      <input 
        type="text"
        value={text}
        onChange={textInput}
      />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return (
          <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main page="index"/>

      <Footer/>

    </div>
  )
}
