interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

function Button({ children, variant = "primary" }: ButtonProps) {

  const styles = {
    primary:
      "bg-[#5C7C89] hover:bg-[#6F95A5] text-white",

    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      className={`${styles[variant]} px-6 py-3 rounded-xl transition`}
    >
      {children}
    </button>
  );
}

export default Button;