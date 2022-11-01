import styles from './Profile.module.css';
import profilePhoto from '../../assets/profile.jpeg';

const Profile = ({ username }) => {
  return (
    <header id={styles.profile}>
      <img src={profilePhoto} id={styles.profile_img} alt="" />
      <h1 id={styles.twitter}>devBayo</h1>
      <h2 id={styles.slack}>{username}</h2>
    </header>
  );
};

export default Profile;
