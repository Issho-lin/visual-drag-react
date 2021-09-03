import React, { useMemo } from 'react'
import Components from './index'
import styles from './$Group.less'

const $Group: React.FC<{
  propValue: {
    component: '$Button' | '$Text' | '$Picture' | '$RectShape';
    groupStyle: React.CSSProperties;
    propValue: string;
    id: number;
  }[]
}> = ({
  propValue
}) => {
  return (
    <div className={styles.group}>
      {/* {
        propValue.map((item, index) => {
          const Comp = Components[item.component]
          return <Comp />
        })
      } */}
    </div>
  )
}
export default $Group
