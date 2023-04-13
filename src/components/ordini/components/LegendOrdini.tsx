import React from 'react'

const LegendOrdini = () => {
  return (
    <div>
      <h2 className='text-lg'>Vuoi sapere cosa significano gli <span className='font-semibold'>Stati degli Ordini?</span>  Ecco una spiegazione dettagliata di ogni stato.</h2>

      <div className='mt-4 flex items-center space-x-4'>
        <p className='bg-[#f58220] px-5 py-5 rounded-md'></p>
        <div>
          <p className='font-semibold'>INSERITO</p>
          <p>Gli ordini in questo stato sono stati acquistati dal Carrello.</p>
        </div>
        
      </div>
    </div>
  )
}

export default LegendOrdini