import React, { Children } from 'react'

const List = ({className, Children}) => {
  return (
    <ul className={className}>{Children}</ul>
  )
}

export default List