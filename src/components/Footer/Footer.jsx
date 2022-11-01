import styles from './Footer.module.css';
import zuriLogo from '../../assets/Vector.svg';
import FooterText from '../../assets/text.svg';
import I4GLogo from '../../assets/I4G.svg';

const Footer = () => {
  return (
    <footer>
      <img src={zuriLogo} alt="" />
      <img src={FooterText} alt="" />
      <img src={I4GLogo} alt="" />
    </footer>
  );
};

export default Footer;
