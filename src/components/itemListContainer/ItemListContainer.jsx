import { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import axios from 'axios';

const ItemListContainer = ( {titulo, tipo} ) => {

  // console.log(`tipo ==> ${tipo}`);

  const [productos, setProductos] = useState([]);

  // // obtiene el json de productos de public/data usando fetch api
  // const getProductos = () => {
  //   fetch('data/productos.json', 
  //   { headers : {'Content-Type': 'application/json', 'Accept': 'application/json' }}
  //   )
  //   .then(response => {
  //     // console.log('response ==> ', response)
  //     return response.json();
  //   })
  //   .then(data => {
  //     // console.log('data ==> ', data.productos);
  //     setProductos(data);
  //   })
  //   .catch(error => console.error(error));
  // }

  // // obtiene el json de productos de public/data usando axios y then / catch
  // const getProductos = async () => {
  //   await axios.get('./data/productos.json')
  //     .then(response => {
  //       // console.log('response.data ==> ', response.data.productos)
  //       setProductos(response.data.productos);
  //     })
  //     .catch(error => console.error(error));
  // }

  // obtiene el json de productos de public/data usando axios y try catch
  const getProductos = async () => {
    try {
      const response = await axios.get('/data/productos.json')

      // if (tipo === undefined) {           // no hay filtro
      //   setProductos(response.data.productos);
      // } else {                           // filtra por tipo
      //   setProductos(response.data.productos.filter(item => item.tipo === tipo));
      // }

      setProductos(response.data.productos)

    } catch (error) {
      console.error(error);
    }
  };

  // obtiene lista de productos simulando que tarda 3 segundos
  useEffect(() => {
    setTimeout(getProductos, 800);  
  // }, [tipo])  
  }, [])  

  // console.log('ItemListContainer productos', productos)

  return (
    // <div className='itemListContainer container p-5'>
    <div className='itemListContainer'>
        <h1 style={{ padding: (0, 20) }} >{titulo}</h1>
        {/* <h3 className='subtitulo'>
            {
              {
                'lampara': 'Lámparas',
                'luminaria': 'Luminarias',                                                    
                'proyector': 'Proyectores',
                undefined: 'Todos los Productos'
              } [tipo]
            }
        </h3>  */}

        {/* { productos.length > 0 ? 
            <ItemList productos={productos} tipo={tipo} />
        : 
            <h1 style={{ padding: "30px 0px"}}>Cargando...</h1>
        } */}

        { productos.length > 0 ? 
            <ItemList productos={productos} tipo={tipo} />
        : 
            <div className="spinner-border text-secondary m-4" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        }
    </div>
  )
};

export default ItemListContainer;