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
          placeholder="Rua ou Avenida"
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
          {cepResult && (
            <div>
              <p>CEP: {cepResult.cep}</p>
              <p>Logradouro: {cepResult.logradouro}</p>
              <p>Bairro: {cepResult.bairro}</p>
              <p>Cidade/UF: {cepResult.localidade}/{cepResult.uf}</p>
            </div>
          )}

          {cepList.length > 0 && (
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


