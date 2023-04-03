import React from 'react'
import Container from './leyouts/Container'
import Flex from './leyouts/Flex'
import List from './leyouts/List'
import {FaAngleDown} from 'react-icons/fa'
import Listitem from './leyouts/Listitem'


const Navbar = () => {
  return (
    <div className='w-full bg-[#F4f4F4]'>
     <Container>
      <Flex className='flex justify-between items-center'>
        <div className='relative'>
          <p className='flex items-center gap-x-4 bg-yow py-4 px-6 text-base font-medium font-popi text-white cursor-pointer'>
            <span>Browse categories</span>
            <FaAngleDown />
            <div className='bg-yow absolute top-14 left-0 w-full '>
              <List>
                <Listitem href='avf' className='text-sm font-medium font-popi py-2 px-6 border-t border-[#F4f4F4] hover:px-8' listitem='Ectronics Devices' />
                <Listitem href='avf' className='text-sm font-medium font-popi py-2 px-6 border-t border-[#F4f4F4] hover:px-8' listitem='Health & Beauty' />
                <Listitem href='avf' className='text-sm font-medium font-popi py-2 px-6 border-t border-[#F4f4F4] hover:px-8' listitem='Watches, Bags' />
                <Listitem href='avf' className='text-sm font-medium font-popi py-2 px-6 border-t border-[#F4f4F4] hover:px-8' listitem='Home & Lifestyle' />
                <Listitem href='avf' className='text-sm font-medium font-popi py-2 px-6 border-t border-[#F4f4F4] hover:px-8' listitem='TV & Home Appliances' />
              </List>
            </div>
          </p>
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