const Border = function ({color, children}) {
  return <div style={{ borderColor:color,borderStyle:"solid",borderWidth:"3px", display:"inline-block" }}>{children}</div>;
};

export default Border;
