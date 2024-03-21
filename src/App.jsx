import { useState } from "react";
import Footer from "./components/Footer";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";

function App() {

  const [data, setData] = useState(db);
  const [carro, setCarro] = useState([]);

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((propiedades) => (
            <Guitar 
              key={propiedades.id}
              propiedades={propiedades}
              carro={carro}
              setCarro={setCarro}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
