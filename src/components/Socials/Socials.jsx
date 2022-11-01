import slackLogo from '../../assets/slack.svg';
import githubLogo from '../../assets/Icon.svg';

import styles from './Social.module.css';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a href="@devBayo" target="blank">
        <img
          src={slackLogo}
          className={styles['social-icon']}
          alt="slack logo"
        />
      </a>
      <a href="https://github.com/devbayo" target="blank">
        <img
          src={githubLogo}
          className={styles['social-icon']}
          alt="github logo"
        />
      </a>
    </div>
  );
};

export default Socials;
