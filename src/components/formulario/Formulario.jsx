import React, { useContext, useState } from 'react'

import { GlobalContext } from '../../context/GlobalProvider'
import { BsCheckAll } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast';

// Firebase
import { db } from '../../services/firebase'
import { collection, addDoc } from "firebase/firestore";

const Formulario = ( { itemsCompra, totalCompra} ) => {

  const { clearCart } = useContext(GlobalContext); 

  const [formulario, setFormulario] = useState ({
    buyer: {
        nombre: "",
        apellido: "",
        direccion: "",
        email: "",
        telefono: ""
    },
    total: totalCompra,
    items: itemsCompra
  });

  const [error, setError] = useState ({});

  const {
      buyer: {nombre, apellido, direccion, email, telefono}
  } = formulario;
  
  // valida que ningun campo este vacío   
  const validarCampos = (campos) => {
      return !(Object.values(campos).some((campo) => campo === ""))
  }

  // guarda el ticket de compra en la coleccion "ordenes" en firebase    
  const guardarTicketCompra =  async (formulario) => {
    try {
        const coleccion = collection(db, "ordenes")
        const ordenCompra = await addDoc(coleccion, formulario)
        toast.success(`Su compra a sido registrada con el id: ${ordenCompra.id}`)
        // toast.success(`Su compra a sido registrada con el id...`)
    } catch (error) {
        console.log(error)
    }
  };


  const onSubmit = (e) => {
    e.preventDefault();

    console.log('formulario => ', formulario)

    // if (validarCampos( [nombre, apellido, direccion, email, telefono] )) {
    if (validarCampos(formulario.buyer)) {
        guardarTicketCompra(formulario)
        setTimeout(clearCart, 4000)
    } else {
        toast.error('Por favor llene todos los campos del formulario')
    }
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
        ...formulario,
        buyer: {
            ...formulario.buyer,
            [name]: value
        },
    });
    // console.log(formulario)
  };

  const handleBlur = (e) => {
    const { value, name } = e.target;
    if (value === "") {
      setError({ ...error, [name]: "Este campo es obligatorio" });
      return;
    }
    setError({});
  };


  return (

    <div className='formulario'>
        <form onSubmit={onSubmit} className="container border px-5 py-3 ">
            <h2 className="pb-4">Datos del comprador</h2>
            <div className="row">
                <div className="col-12 col-sm-6 mb-4">
                    <div className="form-floating">
                        <input type="text" name="nombre" className="form-control" 
                               onChange={handleChange} onBlur={handleBlur}
                               placeholder="Nombre" value={nombre}/>
                        <label className="form-label text-left" htmlFor="nombre">Nombre</label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 mb-4">
                    <div className="form-floating">
                        <input type="text" name="apellido" className="form-control" 
                               onChange={handleChange} onBlur={handleBlur}
                               placeholder="Apellido" value={apellido} />
                        <label className="form-label" htmlFor="apellido">Apellido</label>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    {/* Dirección */}
                    <div className="form-floating">
                        <input type="text" name="direccion" className="form-control" 
                            onChange={handleChange} onBlur={handleBlur}
                            placeholder="Direccion" value={direccion} />
                        <label className="form-label" htmlFor="direccion">Dirección</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-6 mb-4">
                    {/* Email input */}
                    <div className="form-floating">
                        <input type="email" name="email" className="form-control" 
                               onChange={handleChange} onBlur={handleBlur}
                               placeholder="Email" value={email} />
                        <label className="form-label" htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 mb-4">
                    {/* Telefono input */}
                    <div className="form-floating">
                        <input type="text" name="telefono" className="form-control" 
                               onChange={handleChange} onBlur={handleBlur}
                               placeholder="Telefono" value={telefono} />
                        <label className="form-label" htmlFor="telefono">Teléfono</label>
                    </div>
                </div>
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-success btn-block my-4">
                <BsCheckAll/>{" "}Enviar datos
            </button>

            <Toaster/>

        </form>
    </div>
  )
}

export default Formulario