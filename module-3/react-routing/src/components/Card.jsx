export function Card({ children, bgColor = "black", title = "Card" }) {
  return (
    <div style={{ backgroundColor: bgColor, color: "white" }}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
}
