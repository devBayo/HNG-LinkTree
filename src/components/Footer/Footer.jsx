import styles from './Footer.module.css';
import zuriLogo from '../../assets/Vector.svg';
import I4GLogo from '../../assets/I4G.svg';

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <img src={zuriLogo} alt="Zuri logo" />
      <h2>HNG Internship 9 Frontend Task</h2>
      <img src={I4GLogo} alt="I4G logo" />
    </footer>
  );
};

export default Footer;
