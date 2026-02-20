import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Melk", amount: 2, bought: true },
    { id: crypto.randomUUID(), name: "Brød", amount: 1, bought: false },
  ]);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState("");

  function addItem(e) {
    e.preventDefault();

    const value = text.trim();
    const tall = Number(amount);

    if (!value && !tall) {
      setError("Du må fylle inn både vare og antall.");
      return;
    }
    if (!value) {
      setError("Du må skrive inn navnet på varen.");
      return;
    }
    if (!tall) {
      setError("Du må skrive inn antall.");
      return;
    }
    if (tall <= 0) {
      setError("Antall må være større enn 0.");
      return;
    }

    setItems([
      { id: crypto.randomUUID(), name: value, amount: tall, bought: false },
      ...items,
    ]);
    setText("");
    setAmount(1);
    setError("");
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
    const tall = Number(newAmount);
    if (tall <= 0) return; 

    setItems(
      items.map((item) =>
        item.id === id ? { ...item, amount: tall } : item
      )
    );
  }

  return (
    <main className="page">
      <section className="card">
        <h1 className="title">Handleliste</h1>

        <form onSubmit={addItem} className="form">
          <label className="label">
            Vare
            <input
              className="input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Skriv en vare..."
            />
          </label>

          <label className="label">
            Antall
            <input
              className="input"
              type="number"
              min={1}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button className="button" type="submit">
            Legg til vare
          </button>
        </form>

        <ul className="list">
          {items.map((item) => (
            <li key={item.id} className="row">
              <input
                type="checkbox"
                checked={item.bought}
                onChange={() => toggleBought(item.id)}
              />

              <span className={item.bought ? "name bought" : "name"}>
                {item.name}
              </span>
              {/* Jeg har spurt KI om hjelp for å fikse denne delen av koden der jeg har måttet gjøre det sånn at tallene i listen kan endres på*/}
              <input
                className="qty"
                type="number"
                min={1}
                value={item.amount}
                onChange={(e) => changeAmount(item.id, e.target.value)}
              />

              <button
                className="delete"
                type="button"
                onClick={() => removeItem(item.id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;