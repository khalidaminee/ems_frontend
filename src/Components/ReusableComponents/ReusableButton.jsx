import React from 'react'

export default function ReusableButton({text, event}) {
  return <button onClick={event}>{text}</button>
}
