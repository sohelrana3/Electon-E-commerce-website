import React, { useState } from 'react'
import Container from './leyouts/Container'
import Flex from './leyouts/Flex'
import List from './leyouts/List'
import {FaAngleDown} from 'react-icons/fa'
import Listitem from './leyouts/Listitem'


const Navbar = () => {
  let [categories, setcatagorise] = useState(false) 
  let handleclick = ()=>{
    setcatagorise(!categories)
  }
  return (
    <div className='w-full bg-[#F4f4F4]'>
     <Container>
      <Flex className='flex justify-between items-center'>
        <div className='relative'>
          <p onClick={handleclick} className='flex items-center gap-x-4 bg-yow py-4 px-6 text-base font-medium font-popi text-white cursor-pointer'>
            <span>Browse categories</span>
            <FaAngleDown />
            </p>
            <div className='bg-yow absolute top-14 left-0 w-full '>
              {
                categories &&(
                  <List>
                    <Listitem href='avf' className='text-white text-sm font-medium font-popi py-2 px-6 border-t border-[#F4f4F4] hover:px-8' listitem='Ectronics Devices' />
                    <Listitem href='avf' className='text-white text-sm font-medium font-popi py-2 px-6 border-t border-[#F4f4F4] hover:px-8' listitem='Health & Beauty' />
                    <Listitem href='avf' className='text-white text-sm font-medium font-popi py-2 px-6 border-t border-[#F4f4F4] hover:px-8' listitem='Watches, Bags' />
                    <Listitem href='avf' className='text-white text-sm font-medium font-popi py-2 px-6 border-t border-[#F4f4F4] hover:px-8' listitem='Home & Lifestyle' />
                    <Listitem href='avf' className='text-white text-sm font-medium font-popi py-2 px-6 border-t border-[#F4f4F4] hover:px-8' listitem='TV & Home Appliances' />
                </List>
                )
              }
            </div>
        </div>
        <div>
              
        </div>
        <div>3</div>
      </Flex>
    </Container>
  </div>
  
  )
}

export default Navbar