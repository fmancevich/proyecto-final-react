// import React from 'react'
   
export const formatPriceNumber = (numero) => {
    // return numero.toLocaleString('es-AR', { minimumFractionDigits: 2 , 
    //                                         maximumFractionDigits: 2 })  
    return numero.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });                                            
}

