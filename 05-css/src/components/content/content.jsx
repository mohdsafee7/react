import styles from './content.module.css'

const App = () => {
  return (
    <div className={styles.content}>
      <h2>Welcom to My Movies</h2>

      <p>Here I will show you what you want to see. Hold On F</p>

      <button className={styles.btn}>Subscribe for Premium</button>
    </div>
  )
}

export default App