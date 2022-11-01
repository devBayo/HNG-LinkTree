import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Links from './components/Links/Links';
import Profile from './components/Profile/Profile';
import Socials from './components/Socials/Socials';

function App() {
  const [username, setUsername] = useState('devBayo');

  return (
    <>
      <Profile username={username} />
      <main>
        <Links username={username} />
        <Socials />
      </main>
      <Footer />
    </>
  );
}

export default App;
