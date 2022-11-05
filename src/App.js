import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({
      username: 'devBayo',
      fullname: 'Abdulqoyyum Ibrahim',
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home username={user.username} />} />
        <Route path="/contact" element={<Contact fullname={user.fullname} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
