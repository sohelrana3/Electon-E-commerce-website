import React from 'react'
import Container from './leyouts/Container'
import Flex from './leyouts/Flex'
import Topheader from './leyouts/Topheader'
import Images from './leyouts/Images'
import Inputbox from './leyouts/Inputbox'

const Header = () => {
  return (
    <Container>
      <Topheader />
      <Flex className='flex bg-primary'>
        <div className='w-1/5'>
          <Images imgsrc='images/logo.png' />
        </div>
        <div>
          <Inputbox placeholder='Serach any things' className='px-4' />
        </div>
        <div>
          
        </div>
      </Flex>
    </Container>
  )
}

export default Header