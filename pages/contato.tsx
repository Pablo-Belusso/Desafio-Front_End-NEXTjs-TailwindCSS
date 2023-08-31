// pages/contato.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContatoPage: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [arquivo, setArquivo] = useState<File | null>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Dados do formulário:');
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);
    console.log('Arquivo:', arquivo);

    // Fazer no futuro algo com os dados, como enviar por email
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];

    if (selectedFile && selectedFile.type === 'application/pdf') {
      setArquivo(selectedFile);
    } else {
      setArquivo(null);
      console.error('Por favor, selecione um arquivo PDF.');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />

      <main className="flex flex-col items-center justify-center flex-1 space-y-8 bg-gray-100 p-4 sm:p-8">

      <h1 className="text-3xl font-semibold mb-2">Entre em Contato</h1>
        <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="mb-3 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </form>

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

export default ContatoPage;
