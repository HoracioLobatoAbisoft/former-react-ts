import React from 'react'
import Header from '../common/Header/Header'
import SearchOrdini from '../ordini/components/SearchOrdini'
import LavoriContent from './components/LavoriContent'


const LavoriPage = () => {
  return (
    <div>
      <div>
      <Header />
      <SearchOrdini />
      <LavoriContent />
    </div>
    </div>
  )
}

export default LavoriPage