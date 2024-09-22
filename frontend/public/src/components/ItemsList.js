import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';


const ItemList = () => {
  const { items, filter } = useSelector((state) => state.items);

  // Memoized filtered list to minimize re-renders
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.toLowerCase().includes(filter.toLowerCase()));
  }, [items, filter]);

  return (
    <ul>
      {filteredItems.length ?  filteredItems.map((item, index) => (
        <Item key={index} name={item} />
      )): <div>No Items Found</div>}
    </ul>
  );
};

export default ItemList;
