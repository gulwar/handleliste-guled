import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, onToggle, onRemove, onChangeAmount }) {
  return (
    <section>
      <ul className="list">
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggle={onToggle}
            onRemove={onRemove}
            onChangeAmount={onChangeAmount}
          />
        ))}
      </ul>
    </section>
  );
}

export default ShoppingList;