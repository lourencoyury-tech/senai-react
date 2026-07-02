  import { useState } from 'react';




function BuscaCEP() {


  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  function buscarCep() {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(dados => setEndereco(dados));
  }
  return (
    <div>
      <h2>Consulta de CEP</h2>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={buscarCep}>
        Buscar
      </button>
      {endereco && (
        <div>
          <p><strong>CEP:</strong> {endereco.cep}</p>
          <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
          <p><strong>Bairro:</strong> {endereco.bairro}</p>
          <p><strong>Cidade:</strong> {endereco.localidade}</p>
          <p><strong>UF:</strong> {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}

export { BuscaCEP };