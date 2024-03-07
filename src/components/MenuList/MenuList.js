import React, { useState } from 'react';
import styles from './MenuList.module.scss';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, handleAddToOrder }) {
  const [filterText, setFilterText] = useState('');

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const items = filteredItems.map(item =>
    <MenuListItem
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      menuItem={item}
    />
  );

  return (
    <main className={styles.MenuList}>
      <input
        type="text"
        placeholder="Filter Menu Items"
        className={styles.filterInput}
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      {items.length > 0 ? items : <p>No items found.</p>}
    </main>
  );
}