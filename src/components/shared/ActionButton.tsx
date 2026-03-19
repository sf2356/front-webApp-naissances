import React from 'react'

type Props = {
    classes: string,
    label: string,
    action: () => null
}

function ActionButton(props: Props) {
    const {classes, label, action} = props
  return (
    <button
    className={`${classes}`}
    onClick={action}
  >
    {label}
        </button>

  )
}

export default ActionButton