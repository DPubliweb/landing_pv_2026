import React from "react";

const variants = {
  default:
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm border bg-slate-900 text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
  secondary:
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm border bg-white text-slate-900 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed",
};

export function Button({ variant = "default", className = "", ...props }) {
  return <button className={`${variants[variant] || variants.default} ${className}`} {...props} />;
}
