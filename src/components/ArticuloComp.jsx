import React, { useState } from 'react'
import { createArticulo } from '../api/articulosService'

const ArticuloComp = ({ articulos, setArticulos }) => {
  const [cliente, setCliente] = useState('')
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)
  const [nuevoArticulo, setNuevoArticulo] = useState({
    id: '',
    nombre: '',
    precio: ''
  })

  const agregarAlCarrito = (articulo) => {
    setCarrito([...carrito, articulo])
    setTotal(total+articulo.precio)
  }

  const crearArticulo = async () => {
      const articuloCreado = await createArticulo(nuevoArticulo)
      setArticulos([...articulos, articuloCreado])
      setNuevoArticulo({
        id: '',
        nombre: '',
        precio: ''
      })
  }
  return (
    <div>
      <div>
        <h3>Crear Artículo</h3>
        <input
          type="number"
          placeholder="ID"
          value={nuevoArticulo.id}
          onChange={(e) => setNuevoArticulo({ ...nuevoArticulo, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoArticulo.nombre}
          onChange={(e) => setNuevoArticulo({ ...nuevoArticulo, nombre: e.target.value })}
        />
        <input
          type="number"
          placeholder="Precio"
          value={nuevoArticulo.precio}
          onChange={(e) => setNuevoArticulo({ ...nuevoArticulo, precio: e.target.value })}
        />
        <button onClick={crearArticulo}>Crear Artículo</button>
      </div>
      
      <div> 
        <h1>Carrito de Compras</h1>
        <h3>Cliente</h3>
        <input
            type="text"
            placeholder="Nombre del Cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
        />
        <h3>Artículos</h3>
        {articulos.map(articulo => (
        <div key={articulo.id}>
            <p>{articulo.nombre} - ${articulo.precio}</p>
            <button onClick={() => agregarAlCarrito(articulo)}>Agregar al Carrito</button>
        </div>
        ))}
        <h3>Carrito</h3>
        {carrito.map((articulo, index) => (
        <div key={index}>
            <p>{articulo.nombre} - ${articulo.precio}</p>
        </div>
        ))}
        <h3>Cliente: {cliente}</h3>
        <h3>Total a Pagar: ${total}</h3>
        </div>
      </div>
      
  )
}

export default ArticuloComp