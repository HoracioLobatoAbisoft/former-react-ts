import React from 'react'
import Header from '../../common/Header/Header'
import SearchOrdini from '../../ordini/components/SearchOrdini'
import DiscountContent from './components/DiscountContent'

const DiscountPage = () => {
  return (
    <>
      <Header />
      <SearchOrdini />
      <DiscountContent />
    </>
  )
}

export default DiscountPage