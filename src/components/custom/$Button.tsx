import styles from './$Button.less'

const $Button: React.FC = ({
  children
}) => {
  return (
    <div className={styles.button}>{ children }</div>
  )
}

export default $Button
