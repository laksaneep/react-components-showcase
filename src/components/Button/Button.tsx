import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children = "Click me!",
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  type = "button",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm hover:shadow-md focus:ring-blue-500",
    secondary:
      "bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-900 shadow-sm hover:shadow-md focus:ring-gray-500 border border-gray-300",
    danger:
      "bg-red-600 hover:bg-red-700 active:bg-red-800 text-white shadow-sm hover:shadow-md focus:ring-red-500",
    outline:
      "bg-white border-2 border-blue-600 hover:bg-blue-50 active:bg-blue-100 text-blue-600 hover:text-blue-700 focus:ring-blue-500 shadow-sm hover:shadow-md",
  };

  const sizeClasses = {
    small: "px-3 py-1.5 text-sm rounded-md",
    medium: "px-4 py-2 text-base rounded-lg",
    large: "px-6 py-3 text-lg rounded-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
