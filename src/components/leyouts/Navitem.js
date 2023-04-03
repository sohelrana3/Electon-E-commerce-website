import React from 'react'
import List from './List'
import Listitem from './Listitem'

const Navitem = () => {
  return (
    <List className='flex gap-x-3'>
    <Listitem listitem='Home' />
    <Listitem listitem='Catagory' />
    <Listitem listitem='About' />
  </List>
  )
}

export default Navitem