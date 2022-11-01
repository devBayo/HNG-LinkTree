import Footer from './components/Footer/Footer';
import Links from './components/Links/Links';
import Profile from './components/Profile/Profile';
import Socials from './components/Socials/Socials';

function App() {
  return (
    <>
      <Profile />
      <main>
        <Links />
        <Socials />
      </main>
      <Footer />
    </>
  );
}

export default App;
