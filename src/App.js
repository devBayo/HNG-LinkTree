import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername('devBayo');
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home username={username} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
