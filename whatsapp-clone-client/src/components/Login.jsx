import React, { useRef } from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import {v4} from 'uuid'

const Login = ({onIdSubmit}) => {

    const idRef = useRef()

    const  handleSubmit = (e)=>{
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    const createNewId = ()=>{
        onIdSubmit(v4())
    }

  return (
   <Container className='d-flex align-items-center' style={{height:'100vh'}}>
    <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group className='mb-4'>
            <Form.Label>Enter your id</Form.Label>
            <Form.Control type='text' ref={idRef} required></Form.Control>
        </Form.Group>
        <Button style={{marginRight: '10px'}} type='submit' className='mr-2'>Login</Button>
        <Button onClick={createNewId} variant='secondary' >Create a new Id</Button>
    </Form>
   </Container>
  )
}

export default Login