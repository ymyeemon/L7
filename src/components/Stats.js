import React, { useState } from "react";

function Stats({items}) {
    const numItems = items.length;
    const numPackedItems = items.filter((item) => item.packed).length;
    const percentPacked = numItems > 0 ? (numPackedItems / numItems * 100).toFixed(2) : 0;
  
    return (
      <footer className="stats">
        {
          percentPacked === 100 ?
          "You got everything! 🎉" :
          `You have ${numItems} items in the list. You already packed ${numPackedItems} (${percentPacked}%).`
        }
      </footer>
    );
}

export default Stats;