"use client";

import React, { forwardRef } from "react";

type InputProps = {
  label?: string;
  helperText?: string;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function mergeClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, helperText, error, icon, className, inputClassName, id, ...props },
    ref
  ) => {
    const inputId =
      id || (label ? label.replace(/\s+/g, "-").toLowerCase() : undefined);

    return (
      <div className={mergeClasses("w-full space-y-2", className)}>
        {label ? (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-gray-700"
          >
            {label}
          </label>
        ) : null}

        <div
          className={mergeClasses(
            "flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 transition-colors",
            error
              ? "border-rose-400 bg-rose-50"
              : "focus-within:border-rose-400 focus-within:bg-white"
          )}
        >
          {icon ? <span className="text-rose-500">{icon}</span> : null}
          <input
            id={inputId}
            ref={ref}
            className={mergeClasses(
              "w-full bg-transparent outline-transparent ring-shadow-none focus:outline-none outline-none ring-0 border-none border-transparent text-gray-800 placeholder:text-gray-400",
              inputClassName
            )}
            {...props}
          />
        </div>

        {error ? (
          <p className="text-xs text-rose-600 font-semibold">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-gray-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
