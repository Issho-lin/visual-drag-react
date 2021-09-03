import styles from './$Picture.less'

const $Picture: React.FC<{
  propValue: string
}> = ({
  propValue
}) => {
  return (
    <div className={styles.div}>
      <img className={styles.img} src={propValue} alt="" />
    </div>
  )
}
export default $Picture
