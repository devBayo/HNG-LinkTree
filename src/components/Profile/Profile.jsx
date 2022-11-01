import styles from './Profile.module.css';
import profilePhoto from '../../assets/profile.jpeg';
import shareIcon from '../../assets/share.svg';

const Profile = ({ username }) => {
  return (
    <header id={styles.profile}>
      <img src={profilePhoto} id={styles.profile_img} alt="" />
      <img src={shareIcon} id={styles.share_profile} alt="" />
      <h1 id={styles.twitter}>{username}</h1>
      <h2 id={styles.slack}>{username}</h2>
    </header>
  );
};

export default Profile;
