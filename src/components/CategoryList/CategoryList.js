import styles from './CategoryList.module.scss';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>
    <li
      key={cat}
      className={cat === activeCat ? styles.active : ''}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  );
  return (
    <div className={styles.CategoryContainer}>
      <ul className={styles.CategoryList}>
        {cats}
      </ul>
    </div>
  );
}
