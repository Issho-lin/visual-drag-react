import { useCallback, useRef, useState } from 'react'
import cx from 'classnames'
import { useModel } from 'umi'
import { keycodes } from '@/utils/shortcutKey'
import styles from './$Text.less'
import type { ElementType } from './type'

const $Text: React.FC<{
  element: ElementType;
  setElement: React.Dispatch<React.SetStateAction<ElementType>>;
  onInput?: (e: ElementType, html: string) => void;
}> = ({
  element,
  setElement,
  onInput
}) => {
  const [canEdit, setCanEdit] = useState(false)
  const [isCtrlDown, setIsCtrlDown] = useState(false)
  const { editMode } = useModel('useEditMode')

  const textRef = useRef<HTMLDivElement>(null)
  const ctrlKey = useRef(17)

  const handleKeyDown = useCallback((e) => {
    if (e.keyCode === ctrlKey.current) {
      setIsCtrlDown(true)
    } else if (isCtrlDown && canEdit && keycodes.includes(e.keyCode)) {
      e.stopPropagation()
    } else if (e.keyCode === 46) {
      e.stopPropagation()
    }
  }, [isCtrlDown, canEdit])

  const handleKeyUp = useCallback((e) => {
    if (e.keyCode === ctrlKey.current) {
      setIsCtrlDown(false)
    }
  }, [])

  const handleMouseDown = useCallback((e) => {
    if (canEdit) {
      e.stopPropagation()
    }
  }, [canEdit])

  const handleBlur = useCallback((e) => {
    setElement(ele => ({
      ...ele,
      propValue: e.target.innerHTML || '&nbsp;'
    }))
    setCanEdit(false)
  }, [setElement])

  const handleInput = useCallback(e => {
    onInput?.(element, e.target.innerHTML)
  }, [element])

  const selectText = useCallback((ele) => {
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(ele)
    selection?.removeAllRanges()
    selection?.addRange(range)
  }, [])

  const setEdit = useCallback(() => {
    if (element.isLock) {
      return
    }
    setCanEdit(true)
    if (textRef.current) {
      selectText(textRef.current)
    }
  }, [element.isLock])

  const clearStyle = useCallback(() => {}, [])

  return (
    <>
      {
        editMode === 'edit' ? (
          <div
            className={styles.text}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
          >
            <div
              ref={textRef}
              contentEditable={canEdit}
              className={cx({[styles.canEdit]: canEdit})}
              tabIndex={element.id}
              onDoubleClick={setEdit}
              onPaste={clearStyle}
              onMouseDown={handleMouseDown}
              onBlur={handleBlur}
              onInput={handleInput}
              dangerouslySetInnerHTML={{__html: element.propValue}}
              style={{
                verticalAlign: element.style.verticalAlign
              }}
            />
          </div>
        ) : (
          <div className={cx(styles.text, styles.preview)}>
            <div
              dangerouslySetInnerHTML={{__html: element.propValue}}
              style={{
                verticalAlign: element.style.verticalAlign
              }}
            />
          </div>
        )
      }
    </>
  )
}
export default $Text
