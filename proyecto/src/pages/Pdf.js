import React from 'react'

export const Pdf = () => {
  return (
    <div style={{position:'absolute', width:'100%', height:'100%'}}>
        <object 
        data={require('../docs/PINATERIA.pdf')}
        type="application/pdf"
        width="100%"
        height="100%"
        >

        </object>
    </div>
  )
}