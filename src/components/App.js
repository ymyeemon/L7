import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: true },
//   { id: 2, description: "Pants", quantity: 2, packed: false },
// ];


function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    // return a new array
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) => prevItems.map((item) =>
    // if the item id doesn't match, return the item as it is
      item.id === id ? {...item, packed: !item.packed} : item));
  }

  function handleRemoveItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems}/>
      <PackingList 
      items={items} 
      onDeleteItem={handleDeleteItem}
      onUpdateItem={handleUpdateItem}
      onRemoveItem={handleRemoveItems}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
