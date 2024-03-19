import Name from "./componentes/Name";
import { useState } from "react";

function App() {
  const [aluno, setAluno] = useState("Sujeito programador")

  return (
    <div>
      <h1>
        componente App
      </h1>
      <br/>
      <h2>olá: {aluno}</h2>
      <Name aluno="lucas" idade="18"/>
      <br />
      <Name aluno="joao" idade="23"/>
    </div>
  );
}

export default App;