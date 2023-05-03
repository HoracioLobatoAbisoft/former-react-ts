import React from 'react'
import Footer from '../common/Footer/Footer'
import Header from '../common/Header/Header'
import SearchOrdini from '../ordini/components/SearchOrdini'
import LavoriContent from './components/LavoriContent'
import useUser from '../../context/useUser'


const LavoriPage = () => {
  const user = useUser()

    console.log(user)
  
  


  return (
    <div>
      <div>
      <Header />
      <SearchOrdini />
      <LavoriContent />
      <Footer/>
    </div>
    </div>
  )
}

export default LavoriPage