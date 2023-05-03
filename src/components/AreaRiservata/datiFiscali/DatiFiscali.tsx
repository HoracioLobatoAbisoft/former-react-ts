import React from 'react'
import Header from '../../common/Header/Header'
import SearchOrdini from '../../ordini/components/SearchOrdini'
import DatiFiscaliPage from './componentes/DatiFiscaliPage'


const DatiFiscali = () => {
  return (
    <>
      <Header />
      <SearchOrdini />
      <DatiFiscaliPage />
    </>
  )
}

export default DatiFiscali