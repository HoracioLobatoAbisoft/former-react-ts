import React from 'react'
import Header from '../common/Header/Header'
import SearchOrdini from '../ordini/components/SearchOrdini'
import LoginForm from './components/LoginForm'
import Footer from '../common/Footer/Footer'

const LoginPage = () => {
  return (
    <div>
      <Header />
      <SearchOrdini />
      <LoginForm />
      <Footer />
    </div>
  )
}

export default LoginPage