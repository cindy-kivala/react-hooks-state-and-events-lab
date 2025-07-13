import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
   // Step 1: Create state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Use state to determine className
  const appClass = isDarkMode ? "App dark" : "App light";

  // Step 3: Button toggles the mode
  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
