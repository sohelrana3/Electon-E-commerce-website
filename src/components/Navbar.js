import React, { useState } from 'react'
import Container from './leyouts/Container'
import Flex from './leyouts/Flex'
import List from './leyouts/List'
import {FaAngleDown, FaBars} from 'react-icons/fa'
import Listitem from './leyouts/Listitem'


const Navbar = () => {
  let [categories, setcatagorise] = useState(false) 
  let [home, sethome] = useState(false)
  let [Catalog, setCatalog] = useState(false)
  let [Pages, setPages] = useState(false)
  let [navbar, setnavbar] = useState(false)
  let handleclick = ()=>{
    console.log("pppp");
    setcatagorise(!categories)
  }
 
  return (
    <div className='w-full bg-[#F4f4F4]'>
     <Container>
      <Flex className='flex justify-between items-center relative'>
        <div className='relative mr-2 lg:mr-0'>
          <p onClick={handleclick} className='flex items-center gap-x-4 bg-yow py-4 px-6 text-base font-medium font-popi text-white cursor-pointer'>
            <span className='hidden lg:block'>Browse categories</span>
            <FaBars className='lg:hidden' />
            <FaAngleDown className='hidden lg:block' />
            </p>
            <div className='bg-yow absolute top-14 left-0 w-[250px] z-50'>
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
          {
            navbar &&(
              <List className='lg:flex absolute right-0 top-10 lg:top-0 sm:max-lg:bg-yow lg:relative z-50 gap-x-7'>
              <div onClick={()=> sethome(!home)} className='flex items-center gap-x-4 relative'>
                  <Listitem className='text-[#3A3A3A] text-base font-medium font-popi' listitem='Home' />
                  <FaAngleDown />
                  <div className='absolute top-10 left-0 bg-[#F4F4F4] w-full z-50'>
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
                  <div className='absolute top-10 left-0 bg-[#F4F4F4] w-full z-50'>
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
                <Listitem className='text-[#3A3A3A] text-base font-medium font-popi' listitem='Blog' />
                <div onClick={()=> setPages(!Pages)} className='flex items-center gap-x-4 relative'>
                  <Listitem className='text-[#3A3A3A] text-base font-medium font-popi' listitem='Pages' />
                  <FaAngleDown />
                  <div className='absolute top-10 left-0 bg-[#F4F4F4] w-full z-50'>
                    {
                      Pages &&(
                        <List>
                        <Listitem href='/' className='text-[#3A3A3A] text-base font-medium font-popi py-2 border-b border-yow' listitem='Pages' />
                        <Listitem href='/' className='text-[#3A3A3A] text-base font-medium font-popi py-2 border-b border-yow' listitem='Pages 2' />
                        <Listitem href='/' className='text-[#3A3A3A] text-base font-medium font-popi py-2 border-b border-yow' listitem='Pages 3' />
                        </List>
                      )
                    }
                  </div>
                </div>
                <Listitem className='text-[#3A3A3A] text-base font-medium font-popi' listitem='About Us' />
              
              
               
            </List >
            )
          }
         
             
        </div>
        <div>
          <h3 className='text-base text-primary font-bold font-popi'>30 Days Free Return</h3>
        </div>
        <div>
          <FaBars onClick={()=>setnavbar(!navbar)} className='block lg:hidden' />
        </div>
      </Flex>
    </Container>
  </div>
  
  )
}

export default Navbar