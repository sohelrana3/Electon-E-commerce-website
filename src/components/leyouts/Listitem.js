import React, { Children } from 'react'

const Listitem = ({className, Children}) => {
  return (
    <li className={className}>{Children}</li>
  )
}

export default Listitem