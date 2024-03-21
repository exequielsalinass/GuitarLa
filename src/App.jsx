import { useState } from "react";
import Footer from "./components/Footer";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";

function App() {
  const [data, setData] = useState(db);

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
          <div className="row mt-5">
            {data.map(() => {
              
            })}
          </div>
          <Guitar />
      </main>

      <Footer />
    </>
  );
}

export default App;
