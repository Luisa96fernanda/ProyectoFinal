import React from 'react'

export const Pdf2 = () => {
  return (
    <div style={{position:'absolute', width:'100%', height:'100%'}}>
        <object 
        data={require('../docs/CACHARRO.pdf')}
        type="application/pdf"
        width="100%"
        height="100%"
        >

        </object>
    </div>
  )
}
