import React from 'react'

const Container = ({classname, children}) => {
  return (
    <div className='max-w-container mx-auto px-2.5'>{children}</div>
  )
}

export default Container