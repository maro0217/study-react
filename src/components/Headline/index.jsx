import styles from 'src/components/Headline/Headline.module.css'

export const Headline = (props) => {
  return (
    <div>
        <h1 className={styles.title}>
         {props.page} page
        </h1>

        <p className={styles.description}>
          アイテムの数： {props.children}個
        </p>
    </div>


  );
}