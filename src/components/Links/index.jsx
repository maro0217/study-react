import styles from 'src/components/Links/Link.module.css'



export const Links = (props) => {

  
  return (
        <div className={styles.grid}>
          <button onClick={props.handleReduce}>減らす</button>
          {props.items.map(item => {
            return (
              <a key={item.href} href={item.href} className={styles.card}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>
              </a>
            );
          })}
        </div>
  )
}