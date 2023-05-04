import React, { useContext } from 'react'
import useUser from '../context/useUser'

const Hijo = () => {

  const user = useUser()

    console.log(user)
  return (
    <div className='mt-20 mx-20'>
      <h1>Hola</h1>
      
    </div>
  )
}

export default Hijo