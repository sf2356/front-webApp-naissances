import React from 'react'

function StatusBar({status,label}:any) {
  return (
<span className={status}>{label}</span>

  )
}

export default StatusBar