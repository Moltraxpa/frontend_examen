import { useState, useEffect } from 'react';
import { getArticulos } from './api/articulosService';
import ArticuloComp from './components/ArticuloComp';

function App() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const fetchArticulos = async () => {
      const data = await getArticulos();
      setArticulos(data);
    };
    fetchArticulos();
  }, []);

  return (
    <div>
      <h1>Gestión de Datos</h1>
      <div>
        <ArticuloComp articulos={articulos} setArticulos={setArticulos} />
      </div>
    </div>
  );
}

export default App;