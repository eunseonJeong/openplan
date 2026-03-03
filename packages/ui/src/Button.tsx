import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  size?: "m" | "l";
};

export function Button({
  loading = false,
  disabled,
  size = "l",
  children,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      className={[styles.button, className].filter(Boolean).join(" ")}
      disabled={isDisabled}
      {...props}
      data-size={size}
    >
      {loading ? <span className={styles.spinner} aria-label="loading" /> : null}
      <span className={styles.label}>{children}</span>
    </button>
  );
}
