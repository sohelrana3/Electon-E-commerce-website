import React from 'react'
import Container from './leyouts/Container'
import Flex from './leyouts/Flex'
import Images from './leyouts/Images'
import Inputbox from './leyouts/Inputbox'
import List from './leyouts/List'
import Listitem from './leyouts/Listitem'
import Headerroun from './leyouts/Headerroun'
import Button from './leyouts/Button'
import {AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => {
  return (
    <div className='bg-primary '>
       <Container>
        <Flex className='flex items-center justify-between py-4'>
          <div className='w-1/5'>
            <Images imgsrc='images/logo.png' />
          </div>
          <div className='w-[438px] relative'>
            <Inputbox placeholder='Serach any things' className='w-[438px] py-4 rounded-[20px] px-4 border-none outline-none' />
            <Button className='absolute top-0 right-0 py-4 px-10 bg-yow text-white font-popi text-base font-semibold rounded-[20px]' title='Search' />
          </div>
          <div className='flex gap-x-7'>
            <div className='flex items-center gap-x-3'>
              <AiOutlineUser className='text-white' />
              <List>
                <Listitem href='about' className="font-popi font-normal text-sm text-white" listitem="login"/>
              </List>
            </div>
            <div className='flex items-center'>
              <AiOutlineHeart className='text-white' />
              <Headerroun />
              <List>
                <Listitem href='about' className="font-popi font-normal text-sm text-white pl-4"  listitem="Sing up"/>
              </List>
            </div>
            <div className='flex items-center'>
              <AiOutlineShoppingCart className='text-white' />
              <Headerroun />
              <List>
                <Listitem href='about' className="font-popi font-normal text-sm text-white pl-4"  listitem="Cart"/>
              </List>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
   
  )
}

export default Header