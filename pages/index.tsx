// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (

    <div className="flex flex-col h-screen bg-gray-100">

      <Header />

      <main className="flex flex-col items-center justify-center flex-1 space-y-12 bg-gray-100">
        <Link href="/clima">
          <p className="btn flex items-center">Ver Clima da Cidade</p>
        </Link>
        <Link href="/busca-cep">
          <p className="btn flex items-center">Buscar CEP</p>
        </Link>
        <Link href="/contato">
          <p className="btn flex items-center">Contato</p>
        </Link>
      </main>

      <Footer />

    </div>
  );
};

export default HomePage;
