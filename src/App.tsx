import { useState } from 'react';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Reservas } from './components/Reservas';

export type Screen = 'home' | 'login' | 'register' | 'reservas';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {currentScreen === 'home' && <Home navigateTo={navigateTo} />}
      {currentScreen === 'login' && <Login navigateTo={navigateTo} />}
      {currentScreen === 'register' && <Register navigateTo={navigateTo} />}
      {currentScreen === 'reservas' && <Reservas navigateTo={navigateTo} />}
    </div>
  );
}
