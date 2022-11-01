import slackLogo from '../../assets/slack.svg';
import githubLogo from '../../assets/Icon.svg';

import styles from './Social.module.css';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <img src={slackLogo} className={styles['social-icon']} alt="slack logo" />
      <img
        src={githubLogo}
        className={styles['social-icon']}
        alt="github logo"
      />
    </div>
  );
};

export default Socials;
