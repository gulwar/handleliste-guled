import "./App.css";
import { useState } from "react";
import AddForm from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Melk", amount: 2, bought: true },
    { id: crypto.randomUUID(), name: "Brød", amount: 1, bought: false },
  ]);

  function addItem(name, qty) {
    const value = name.trim();
    const amount = Number(qty);

    setItems([
      { id: crypto.randomUUID(), name: value, amount, bought: false },
      ...items,
    ]);
  }

  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function toggleBought(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  }

  function changeAmount(id, newAmount) {
    const amount = Number(newAmount);
    if (amount <= 0) return;

    setItems(
      items.map((item) =>
        item.id === id ? { ...item, amount } : item
      )
    );
  }

  return (
    <main className="page">
      <section className="card">
        <h1 className="title">Handleliste</h1>

        <AddForm onadd={addItem} />

        <ShoppingList
          items={items}
          onToggle={toggleBought}
          onRemove={removeItem}
          onChangeAmount={changeAmount}
        />
      </section>
    </main>
  );
}

export default App;