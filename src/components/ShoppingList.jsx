import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, onToggle, onRemove }) {
  return (
    <section>
      <ul>
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </section>
  );
}
export default ShoppingList;