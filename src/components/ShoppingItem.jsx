function ShoppingItem({ item, onToggle, onRemove, onChangeAmount }) {
  return (
    <li className="row">
      <input
        type="checkbox"
        checked={item.bought}
        onChange={() => onToggle(item.id)}
      />

      <span className={item.bought ? "name bought" : "name"}>
        {item.name}
      </span>

      <input
        className="qty"
        type="number"
        min={1}
        value={item.amount}
        onChange={(e) => onChangeAmount(item.id, e.target.value)}
      />

      <button
        type="button"
        className="delete"
        onClick={() => onRemove(item.id)}
      >
        ✕
      </button>
    </li>
  );
}

export default ShoppingItem;