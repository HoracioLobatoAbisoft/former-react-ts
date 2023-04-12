import React from 'react'
import Header from '../common/Header/Header'
import SearchOrdini from './components/SearchOrdini'
import ContentOrdini from './components/ContentOrdini'

const OrdiniPage = () => {
  return (
    <div>
      <Header />
      <SearchOrdini />
      <ContentOrdini />
    </div>
  )
}

export default OrdiniPage