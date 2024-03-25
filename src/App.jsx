import { useState } from "react";
import Footer from "./components/Footer";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";

function App() {
  const [data, setData] = useState(db);
  const [carro, setCarro] = useState([]);

  const Addcarrito = (propiedades) => {
    const itemExiste = carro.findIndex((guitar) => guitar.id == propiedades.id); //Devuelve -1 cuando no encuentra algo igual

    if (itemExiste >= 0) {
      const actualizarCarro = [...carro];
      actualizarCarro[itemExiste].cantidad++;
      setCarro(actualizarCarro);
    } else {
      propiedades.cantidad = 1; //aca agrego la propiedad cantidad
      setCarro([...carro, propiedades]);
    }
  };

  return (
    <>
      <Header 
        carro={carro}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((propiedades) => (
            <Guitar
              key={propiedades.id}
              propiedades={propiedades}
              carro={carro}
              setCarro={setCarro}
              Addcarrito={Addcarrito}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
