// Import the styles from the module
import styles from './Logo.module.scss';

// Define your Logo component
export default function Logo() {
  return (
    <div className={styles.Logo}>
      {/* Your Logo component content */}
      <img src="/img/PLLOGO.png" className={styles.image} alt="Logo" />
    </div>
  );
}
