import React from 'react'
import Header from '../common/Header/Header'
import SearchOrdini from '../ordini/components/SearchOrdini'
import LoginForm from './components/LoginForm'

const LoginPage = () => {
  return (
    <div>
      <Header />
      <SearchOrdini />
      <LoginForm />
    </div>
  )
}

export default LoginPage