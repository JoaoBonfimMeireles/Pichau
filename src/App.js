import Name from "./componentes/Name";
import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");


  const [user, setUser] = useState({})

  function handleSubmit(e) {
    e.preventDefault();

    alert("oi")

    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label><br/>
        <input 
        placeholder="Digite o Nome"
        value={nome}
        onChange={ (e) => setNome(e.target.value) }></input><br/>

        <label>Email:</label><br/>
        <input 
        placeholder="Digite o Email"
        value={email}
        onChange={ (e) => setEmail(e.target.value) }></input><br/>

        <label>Idade:</label><br/>
        <input 
        placeholder="Digite o Idade"
        value={idade}
        onChange={ (e) => setIdade(e.target.value) }></input><br/><br/>

        <button type="submit">Registrar-se</button>
      </form>

      <br/><br/>
      
      <div>
        <span>Bem vindo: {user.nome}</span><br/>
        <span>Idade: {user.idade}</span><br/>
        <span>Email: {user.email}</span>
      </div>
    </div>
  );
}

export default App;