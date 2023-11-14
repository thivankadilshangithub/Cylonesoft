import React from "react";
import Items from "./pages/items";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <React.Fragment>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Items />} />
            <Route path="/products/:productId" element={<ItemDetails />} />
          </Routes>
        </BrowserRouter>
      </main>
    </React.Fragment>
  );
}

export default App;
