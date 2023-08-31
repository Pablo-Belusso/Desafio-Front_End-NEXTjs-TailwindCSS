import React, { useState } from 'react';

const BuscaCepPage: React.FC = () => {
  const [logradouro, setLogradouro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');
  const [cepData, setCepData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://viacep.com.br/ws/${uf}/${localidade}/${logradouro}/json/`);
      const data = await response.json();

      if (response.ok) {
        setCepData(data);
      } else {
        setError('CEP não encontrado.');
      }
    } catch (error) {
      setError('Ocorreu um erro ao buscar o CEP.');
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">Busca de CEP</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <input
          type="text"
          placeholder="Logradouro"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Cidade"
          value={localidade}
          onChange={(e) => setLocalidade(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="UF"
          value={uf}
          onChange={(e) => setUf(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        >
          {loading ? 'Buscando...' : 'Buscar CEP'}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {cepData && (
          <div className="mt-4">
            <p><strong>CEP:</strong> {cepData.cep}</p>
            <p><strong>Logradouro:</strong> {cepData.logradouro}</p>
            <p><strong>Bairro:</strong> {cepData.bairro}</p>
            <p><strong>Cidade:</strong> {cepData.localidade}</p>
            <p><strong>UF:</strong> {cepData.uf}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuscaCepPage;


/*
import React, { useState } from 'react';
import Link from 'next/link';

import { FiArrowLeft } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';


const BuscaCepPage: React.FC = () => {
  
  const [cep, setCep] = useState<string>('');
  const [cepList, setCepList] = useState<any[]>([]);
  const [cepResult, setCepResult] = useState<any | null>(null); 
  const [logradouro, setLogradouro] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  
  const [logradouro, setLogradouro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');
  const [cepData, setCepData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (cep) {
      setLoading(true);

      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        setCepResult(data);
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        setCepResult(null);
      }

      setLoading(false);
    }

    if (logradouro) {
      setLoading(true);

      try {
        const response = await fetch(`https://viacep.com.br/ws/${logradouro}/json/`);
        const data = await response.json();
        
        // Use a lista de CEPs relacionados ao logradouro
        setCepList(data);

      } catch (error) {
        console.error('Erro ao buscar logradouro:', error);
        setCepList([]);
      }

      setLoading(false);
    }
  

    

};

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />

      <main className="flex flex-col items-center justify-center flex-1 space-y-12 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Buscar CEP</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          className="border p-2"
        />
        
        <input
          type="text"
          placeholder="Logradouro"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
          className="border p-2"
        />


        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Buscar
        </button>
      </div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {cepResult ? (
            <div>
              <p>CEP: {cepResult.cep}</p>
              <p>Logradouro: {cepResult.logradouro}</p>
              <p>Bairro: {cepResult.bairro}</p>
              <p>Cidade/UF: {cepResult.localidade}/{cepResult.uf}</p>
            </div>
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}


          {cepList.length > 0 ? (
            <div>
              <p>Selecione um CEP:</p>
              <ul>
                {cepList.map((cep) => (
                  <li key={cep.cep}>
                    <button
                      onClick={() => setCepList([cep])}
                      className="text-blue-500"
                    >
                      {cep.cep} - {cep.logradouro} - {cep.bairro} - {cep.localidade}/{cep.uf}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}

        </>
      )}

      <div className="mt-4">
      <Link href="/">
            <p className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md w-full ml-4 flex items-center justify-center hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">
            <FiArrowLeft className="mr-2" /> Voltar
            </p>
      </Link>
      </div>

      </main>
      <Footer />
      
    </div>
  );
};

export default BuscaCepPage;

*/
