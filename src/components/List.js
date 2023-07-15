const List = ({ layout, items }) => {
  let style='circle';
  switch (layout ) {
    case "numbered":
      style = "lower-roman";
      break;
    case "alpha":
      style = "lower-alpha";
      break;
    case "bullet":
      style = "disc";
      break;
    default:
      style = "circle";
  }
  return (
    <ul style={{ listStyleType: style }}>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default List;
