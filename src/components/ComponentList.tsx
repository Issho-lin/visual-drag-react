import React, { useCallback } from 'react'
import componentList from '@/components/custom/componentList'
import cx from 'classnames'
import styles from './ComponentList.less'

const ComponentList: React.FC = () => {
  const handleDragStart = useCallback((e) => {
    e.dataTransfer.setData('index', e.target.dataset.index)
  }, [])
  return (
    <div
      onDragStart={handleDragStart}
      className={styles['component-list']}
    >
      {
        componentList.map((item, index) => (
          <div
            key={index}
            className={styles.list}
            data-Index={index}
            draggable
          >
            <span className={cx(styles.iconfont, styles[`icon-${item.icon}`])}/>
            <span>{ item.label }</span>
          </div>
        ))
      }
    </div>
  )
}
export default ComponentList
