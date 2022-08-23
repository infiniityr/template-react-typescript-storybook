import './MyButton.css'

import React from 'react'

type MyButtonProps = {
  text: string
  color?: 'primary' | 'secondary'
  onClick?: any
}

export default function MyButton({ text, color, onClick }: MyButtonProps) {
  return (
    <button
      className={['lib__my-button', color ?? ''].join(' ')}
      type="button"
      onClick={onClick}>
      {text}
    </button>
  )
}
