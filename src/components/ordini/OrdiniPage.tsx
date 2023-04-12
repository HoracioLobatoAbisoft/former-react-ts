import React from 'react'
import Button from '@mui/material/Button';
import Header from '../common/Header';
import SearchOrdini from './SearchOrdini';
import OrdiniContent from './OrdiniContent';


const OrdiniPage = () => {
  return (
    <>
      <Header />
      <SearchOrdini />
      <OrdiniContent />
    </>
    
  )
}

export default OrdiniPage