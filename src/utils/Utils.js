// import React from 'react'
   
export const formatPriceNumber = (numero) => {
    return numero.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
}

   
export const formatGoogleSharedUrl = (url) => {
    return url.replace('/view?usp=sharing','').replace('file/d/','uc?export=view&id=')
}

