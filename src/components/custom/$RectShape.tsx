import $Text from './$Text'
import styles from './$RectShape.less'
import type { ElementType } from './type'

const $RectShape: React.FC<{
  element: ElementType;
  setElement: React.Dispatch<React.SetStateAction<ElementType>>;
}> = ({
  element,
  setElement
}) => {
  return (
    <div className={styles['rect-shape']}>
      <$Text element={element} setElement={setElement}/>
    </div>
  )
}
export default $RectShape
