import React from 'react'
import Container from './leyouts/Container'
import Flex from './leyouts/Flex'
import Topheader from './leyouts/Topheader'

const Header = () => {
  return (
    <Container>
      <Topheader />
      <Flex className='flex justify-between bg-primary'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Flex>
    </Container>
  )
}

export default Header