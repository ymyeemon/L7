import React, { useState } from "react";

function Form({handleAddItems}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(event) {
      event.preventDefault();
  
      if (!description) return;
  
      const newItem = { 
        id: Date.now(), 
        description, 
        quantity,
        packed: false 
      };
  
      handleAddItems(newItem);
  
      setDescription("");
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
  
        <select 
        value={quantity} 
        onChange={(event) => setQuantity(Number(event.target.value))}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
  
        <input 
        value={description} 
        type="text" 
        placeholder="Item" 
        onChange={(event) => setDescription(event.target.value)}
        />
  
        <button type="submit">Add Item</button>
  
      </form>
    );
}

export default Form;