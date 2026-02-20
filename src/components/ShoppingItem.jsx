function ShoppingItem({ item, onToggle, onRemove }) {
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
      <span className="qty">{item.amount}</span>
      <button type="button" className="delete" onClick={() => onRemove(item.id)}>
        ✕
      </button>
    </li>
  );
}

export default ShoppingItem;