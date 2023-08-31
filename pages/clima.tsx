// pages/clima.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ClimaPage: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Substitua 'SUA_API_KEY' pela sua chave de API do OpenWeatherMap
    const apiKey = '3568d16c89d7a182a2065a3a2d73c060';
    const city = 'Goiânia'; // Substitua por uma cidade real

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar dados do clima:', error);
        setLoading(false);
      });
  }, []);


  const kelvinToCelsius = (kelvin: number) => {
    return (kelvin - 273.15).toFixed(2);
  };

  const weatherDescriptions: { [key: string]: string } = {
    'clear sky': 'céu limpo',
    'few clouds': 'poucas nuvens',
    'scattered clouds': 'nuvens dispersas',
    'broken clouds': 'nuvens quebradas',
    'shower rain': 'chuva rápida',
    'rain': 'chuva',
    'thunderstorm': 'trovoada',
    'snow': 'neve',
    'mist': 'névoa',
  };

  return (

    
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />

      <main className="flex flex-col items-center justify-center flex-1 space-y-12 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Clima Atual em:</h1>
          {loading ? (
            <p className="text-gray-500">Carregando...</p>
          ) : (
            <>
              {weather ? (
                <div className="bg-white p-6 rounded-lg shadow-lg items-center">
                  {/* Cidade */}
                  <p className="text-lg font-bold "> {weather.name}</p>  
                  {weather.main && (
                    /* Temperatura */
                    <p className="text-xl mt-2"> {kelvinToCelsius(weather.main.temp)}°C</p>  
                  )}
                  {weather.weather && weather.weather.length > 0 && (
                    /* Descrição */
                    <p className="text-base font-semibold mt-2"> {weatherDescriptions[weather.weather[0].description]}</p>  
                  )}
                </div>
              ) : (
                <p className="text-red-500 mt-2">Não foi possível obter os dados do clima.</p>
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

export default ClimaPage;