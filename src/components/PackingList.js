import React, { useState } from "react";

// Child Component
function Item({ item, onDeleteItem, onUpdateItem }) {
    return (
      // style={item.packed ? {textDecoration: "line-through"} : {}}
      <li className="item" style={item.packed ? {textDecoration: "line-through"} : {}}>
  
        <input type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItem(item.id)}/>
  
        {item.description} ({item.quantity})
  
        <button onClick={() => onDeleteItem(item.id)}>✖️</button>
  
      </li>
    );
}
  
  
// Parent Component (Data comes from the PackingList)
function PackingList({items, onDeleteItem, onUpdateItem, onRemoveItem}) {
    return (
      <div className="list">
        <button onClick={onRemoveItem}>Remove All Items</button>
        <ul>
          {[...items].sort((item1, item2) => {
            if (item1.packed && !item2.packed) return 1;
            if (!item1.packed && item2.packed) return -1;
            return 0;
          }).map((item) => (
            <Item 
            key={item.id} 
            item={item} 
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}/>
          ))}
        </ul>
      </div>
    );
}

export default PackingList;
