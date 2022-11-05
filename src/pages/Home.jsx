import Profile from '../components/Profile/Profile';
import Links from '../components/Links/Links';
import Socials from '../components/Socials/Socials';

const Home = props => {
  return (
    <>
      <Profile username={props.username} />
      <main>
        <Links username={props.username} />
        <Socials />
      </main>
    </>
  );
};

export default Home;
