import React, { useState } from 'react'
import { createArticulo } from '../api/articulosService'

const ArticuloComp = ({ articulos }) => {
  const [cliente, setCliente] = useState('')
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)

  const agregarAlCarrito = (articulo) => {
    setCarrito([...carrito, articulo])
    setTotal(total + articulo.precio)
  }

  const guardarCompra = async () => {
    if (!cliente || carrito.length === 0) {
      alert('Debe ingresar el nombre del cliente y seleccionar al menos un artículo')
      return
    }

    const compra = {
      cliente,
      articulos: carrito,
      total
    }

    try {
      await createArticulo(compra)
      setCliente('')
      setCarrito([])
      setTotal(0)
      alert('Compra guardada exitosamente')
    } catch (error) {
      console.error('Error al guardar la compra:', error)
      alert('Hubo un error al guardar la compra')
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre del Cliente"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />
      <div>
        <h3>Artículos</h3>
        {articulos.map(articulo => (
          <div key={articulo.id}>
            <p>{articulo.nombre} - ${articulo.precio}</p>
            <button onClick={() => agregarAlCarrito(articulo)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Carrito</h3>
        {carrito.map((articulo, index) => (
          <div key={index}>
            <p>{articulo.nombre} - ${articulo.precio}</p>
          </div>
        ))}
        <h3>Total a Pagar: ${total}</h3>
      </div>
      <button onClick={guardarCompra}>Guardar Compra</button>
    </div>
  )
}

export default ArticuloComp