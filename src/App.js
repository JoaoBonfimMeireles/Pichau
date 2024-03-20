import { useState } from "react";

function App() {
    const [input, setInput] = useState("");
    const [tarefas, setTarefas] = useState([
        "pagar a conta de luz",
        "estudar react js"
    ]);

  function handleSubmit(e) {
    e.preventDefault();

    setTarefas([...tarefas, input])
    setInput("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nome da tarefa:</label><br/>
        <input 
        placeholder="Digite o Nome"
        value={input}
        onChange={ (e) => setInput(e.target.value) }></input><br/>

        <button type="submit">Registrar-se</button>
      </form>
      <br/><br/>
      <div>
        {tarefas.map( tarefa => (
            <li key={tarefa}>{tarefa}</li>
        ))}
      </div>
    </div>
  );
}

export default App;