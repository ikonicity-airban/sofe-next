interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export default function Reveal({
  children,
  width = "fit-content",
}: RevealProps) {
  return (
    <div style={{ width, overflow: "hidden", position: "relative" }}>
      <span>{children}</span>
    </div>
  );
}
