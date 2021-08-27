import { useCallback, useState } from "react";

export default function useCanvasStyle() {
  const [canvasStyleData, setCanvasStyleData] = useState({
    width: 1200,
    height: 740,
    scale: 100,
  })
  const changeStyleWithScale = useCallback((value: number) => {
    return value * canvasStyleData.scale / 100
  }, [canvasStyleData])
  return {
    canvasStyleData,
    setCanvasStyleData,
    changeStyleWithScale
  }
}
