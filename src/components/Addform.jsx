import { useState } from "react";

function AddForm({ onadd }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [error, setError] = useState("");

  function handleListSubmit(e) {
    e.preventDefault();

    if (name.trim() === "" && qty === "") {
      setError("Fyll inn vare og antall");
      return;
    } else if (name.trim() === "") {
      setError("Du må skrive inn en vare");
      return;
    } else if (qty === "") {
      setError("Du må skrive inn antall");
      return;
    } else if (Number(qty) <= 0) {
      setError("Antall må være større enn 0");
      return;
    }

    onadd(name, Number(qty));
    setName("");
    setQty("");
    setError("");
  }

  return (
    <section>
      <form onSubmit={handleListSubmit} className="form">
        <label className="label">
          Vare
          <input
            className="input"
            type="text"
            placeholder="Vare"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="label">
          Antall
          <input
            className="input"
            type="number"
            placeholder="Antall"
            min="1"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </label>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button className="button" type="submit">
          Legg til vare
        </button>
      </form>
    </section>
  );
}

export default AddForm;