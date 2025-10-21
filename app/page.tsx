import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import { describe } from 'node:test'
import React from 'react'

const Home = () => {
  return (
    <Container className=''>
      <h2>Home</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nobis sit, suscipit accusantium, impedit modi molestiae non a quae sequi natus voluptate reprehenderit, dolor placeat reiciendis id. Odio recusandae reprehenderit, ex ut delectus ea veniam eveniet, ducimus voluptatibus similique, ipsa suscipit iste facere aliquid officia doloremque cumque? Eligendi, alias laborum!</p>
      <Button variant={"destructive"}>Check out</Button>
    </Container>
  )
}

export default Home
