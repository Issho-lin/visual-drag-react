import { useCallback, useState } from 'react'
import { Button } from 'antd'
import { useModel } from 'umi'
import styles from './Preview.less'

const Preview: React.FC = () => {
  const { canvasStyleData, changeStyleWithScale } = useModel('useCanvasStyle')
  const [show, setShow] = useState(false)
  const handleClose = useCallback(() => {}, [])
  if (!show) {
    return null
  }
  return (
    <div className={styles.bg}>
      <Button onClick={handleClose}>关闭</Button>
      <div className={styles['canvas-container']}>
        <div
          className={styles.canvas}
          style={{
            width: changeStyleWithScale(canvasStyleData.width),
            height: changeStyleWithScale(canvasStyleData.height)
          }}
        >

        </div>
      </div>
    </div>
  )
}
export default Preview
