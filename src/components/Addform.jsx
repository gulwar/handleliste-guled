import { useState } from "react";

function AddForm({ onadd }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [error, setError] = useState("");

  function Handlelistesubmit(e) {
    e.preventDefault();

    if (name === "" && qty === "") {
      setError("Fyll inn vare og antall");
      return;
    } else if (name === "") {
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
      <form onSubmit={Handlelistesubmit}>
        <input
          type="text"
          placeholder="Vare"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Antall"
          min="1"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />

        <button type="submit">Legg til</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>} {/* Feilmelding i rødt */}
    </section>
  );
}

export default AddForm;