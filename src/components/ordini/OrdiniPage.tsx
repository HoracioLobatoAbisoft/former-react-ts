import React from 'react'
import Header from '../common/Header/Header'
import SearchOrdini from './components/SearchOrdini'
import ContentOrdini from './components/ContentOrdini'
import Footer from '../common/Footer/Footer'

const OrdiniPage = () => {
  return (
    <div>
      <Header />
      <SearchOrdini />
      <ContentOrdini />
      <Footer />
    </div>
  )
}

export default OrdiniPage