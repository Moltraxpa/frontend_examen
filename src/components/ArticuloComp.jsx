import React, { useState } from 'react'
import { getArticulos, createArticulo } from '../api/articulosService'

const ArticuloComp = ({ articulos, setArticulos }) => {
  const [nuevoArticulo, setNuevoArticulo] = useState({
    id: '',
    nombre: '',
    precio: ''
  })
    const guardarArticulo = async () => {
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
      <button onClick={guardarArticulo}>Crear Articulo</button>
      <div>
        {articulos.map(articulo => (
          <div key={articulo._id}>
            <h2>ID: {articulo.id}</h2>
            <p>Nombre: {articulo.nombre}</p>
            <p>Precio: {articulo.precio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticuloComp