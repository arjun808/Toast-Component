const backgroundColors: Record<string, string> = {
  success: "lightgreen",
  error: "lightcoral",
  info: "lightblue",
};

const Toast = ({ message, type }: { message: string; type: string }) => {
  const backgroundColor = backgroundColors[type] || "lightgray";

  return (
    <div
      style={{
        background: backgroundColor,
        padding: "10px",
        borderRadius: "6px",
        color: "#000",
        margin: "10px 0",
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
