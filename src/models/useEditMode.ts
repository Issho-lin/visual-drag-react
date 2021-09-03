import { useState } from "react";

export default function useEditMode () {
  const [editMode, setEditMode] = useState('edit')
  return {
    editMode,
    setEditMode
  }
}
