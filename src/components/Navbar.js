import React, { useState } from 'react'
import Container from './leyouts/Container'
import Flex from './leyouts/Flex'
import List from './leyouts/List'
import {FaAngleDown} from 'react-icons/fa'
import Listitem from './leyouts/Listitem'


const Navbar = () => {
  let [categories, setcatagorise] = useState(false) 
  let [home, sethome] = useState(false)
  let [Catalog, setCatalog] = useState(false)
  let handleclick = ()=>{
    console.log("pppp");
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
          <List className='flex gap-x-3'>
              <div onClick={()=> sethome(!home)} className='flex items-center gap-x-4 relative'>
                <Listitem className='text-[#3A3A3A] text-base font-medium font-popi' listitem='Home' />
                <FaAngleDown />
                <div className='absolute top-10 left-0 bg-[#F4F4F4] w-full'>
                  {
                    home &&(
                      <List>
                      <Listitem href='/' className='text-[#3A3A3A] text-base font-medium font-popi py-2 border-b border-yow' listitem='Home' />
                      <Listitem href='/' className='text-[#3A3A3A] text-base font-medium font-popi py-2 border-b border-yow' listitem='Home 2' />
                      <Listitem href='/' className='text-[#3A3A3A] text-base font-medium font-popi py-2 border-b border-yow' listitem='Home 3' />
                      </List>
                    )
                  }
                </div>
              </div>
              <div onClick={()=> setCatalog(!Catalog)} className='flex items-center gap-x-4 relative'>
                <Listitem className='text-[#3A3A3A] text-base font-medium font-popi' listitem='Catalog' />
                <FaAngleDown />
                <div className='absolute top-10 left-0 bg-[#F4F4F4] w-full'>
                  {
                    Catalog &&(
                      <List>
                      <Listitem href='/' className='text-[#3A3A3A] text-base font-medium font-popi py-2 border-b border-yow' listitem='Catalog' />
                      <Listitem href='/' className='text-[#3A3A3A] text-base font-medium font-popi py-2 border-b border-yow' listitem='Catalog 2' />
                      <Listitem href='/' className='text-[#3A3A3A] text-base font-medium font-popi py-2 border-b border-yow' listitem='Catalog 3' />
                      </List>
                    )
                  }
                </div>
              </div>
              
          </List >
             
        </div>
        <div>
          <h3 className='text-base text-primary font-bold font-popi'>30 Days Free Return</h3>
        </div>
      </Flex>
    </Container>
  </div>
  
  )
}

export default Navbar