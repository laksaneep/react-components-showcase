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
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed font-sans";

  const variantClasses = {
    primary:
      "bg-primary hover:bg-primary/90 active:bg-primary/80 text-primary-foreground focus:ring-primary",
    secondary:
      "bg-secondary hover:bg-secondary/80 active:bg-secondary/60 text-secondary-foreground border border-border focus:ring-secondary",
    danger:
      "bg-destructive hover:bg-destructive/90 active:bg-destructive/80 text-destructive-foreground focus:ring-destructive",
    outline:
      "bg-background border-2 border-primary hover:bg-accent active:bg-accent/80 text-primary hover:text-primary/90 focus:ring-primary",
  };

  const sizeClasses = {
    small: `px-3 py-1.5 text-sm rounded-sm`,
    medium: `px-4 py-2 text-base rounded-md`,
    large: `px-6 py-3 text-lg rounded-lg`,
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} shadow-sm ${className}`;

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
