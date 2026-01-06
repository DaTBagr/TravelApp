export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add some items bitch</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You're packed cunt"
          : `You have ${numItems} items on your list, and have packed ${numPacked} (
        ${percentage}%).`}
      </em>
    </footer>
  );
}
