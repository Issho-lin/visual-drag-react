import React, { useCallback } from 'react'
import styles from './ComponentWrapper.less'

const ComponentWrapper: React.FC<{
  config: {
    id?: number;
    component?: string;
    icon?: string;
    isLock?: boolean;
    label?: string;
    propValue?: string;
    style?: React.CSSProperties;
    events?: {
      redirect?: string;
      alert?: string;
    };
    animations?: {
      label: string;
      value: string;
    }[];
  }
}> = ({
  config
}) => {
  const handleClick = useCallback(() => {

  }, [config])
  return (
    <div onClick={handleClick}>

    </div>
  )
}

export default ComponentWrapper
