import React, { useState, useDispatch } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ItemDetail = ( {index, producto} ) => {

  const blank = '\u00A0';

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let nombre = producto.nombre === undefined ? `${blank}` : producto.nombre 
  let imagen = 'images/' + ( producto.imagen === undefined ? 'imgen_no_disponible.jpg' : producto.imagen);

  // console.log(index, producto);

  return (

      <div className='itemDetail'>

        {/* <Button variant="primary" onClick={() => getProductoPorId()} > */}

        <button type="button" className="btn btn-primary" 
                data-bs-toggle="modal" data-bs-target={`#productoDetailModal${index}`} >
            Ver detalle
        </button>

        <div className="modal fade" id={`productoDetailModal${index}`} data-backdrop="static" 
             tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true"  >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">{nombre}</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-4">
                    <img width="170" height="170" src={imagen} alt="Citron" />
                  </div>
    
                  <div className="col-sm">
                    <p className="lead">
                      {producto.descripcion}
                    </p>
                    <h3 className="price">${producto.precio}</h3> <br />
                  </div>
                </div>
              </div>
    
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cerrar
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  };

export default ItemDetail;