import React from 'react'
import Header from '../common/Header/Header'
import SearchOrdini from '../ordini/components/SearchOrdini'
import Footer from '../common/Footer/Footer'
import IndirizziCorriereContent from './components/IndirizziCorriereContent'

const IndirizziCorriere = () => {
    return (
        <>
            <Header />
            <SearchOrdini />
            <IndirizziCorriereContent/>
            <Footer />
        </>
    )
}

export default IndirizziCorriere