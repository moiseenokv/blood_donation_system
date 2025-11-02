import React from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

interface Props {}

function HomePage(props: Props) {
  const {} = props

  return (
    <div className='p-5 space-y-5'>
      <h1>Homepage</h1>
      <Button variant={`default`}>Shadcn default</Button>
      <Input placeholder='Shadcn' type='text'/>
    </div>
  )
}

export default HomePage
