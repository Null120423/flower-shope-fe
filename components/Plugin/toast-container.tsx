"use client";

import { toastEmitter, ToastMessage } from "@/components/Plugin/toast-emitter";
import { useEffect, useState } from "react";
import ToastItem from "./toast-item";

export default function ToastContainer() {
  const [toasts, setToasts] = useState<Map<string, ToastMessage>>(new Map());

  useEffect(() => {
    const handleAdd = (toast: ToastMessage) => {
      setToasts((prev) => new Map(prev).set(toast.id, toast));
    };

    const handleRemove = (toast: ToastMessage) => {
      setToasts((prev) => {
        const newToasts = new Map(prev);
        newToasts.delete(toast.id);
        return newToasts;
      });
    };

    toastEmitter.onAdd(handleAdd);
    toastEmitter.onRemove(handleRemove);

    return () => {
      toastEmitter.removeAllListeners("add");
      toastEmitter.removeAllListeners("remove");
    };
  }, []);

  // Group toasts by position
  const toastsByPosition = Array.from(toasts.values()).reduce((acc, toast) => {
    const position = toast.position || "top-right";
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(toast);
    return acc;
  }, {} as Record<string, ToastMessage[]>);

  const positionClasses: Record<string, string> = {
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-4 right-4",
  };

  return (
    <>
      {Object.entries(toastsByPosition).map(([position, positionToasts]) => (
        <div
          key={position}
          className={`fixed ${positionClasses[position]} flex flex-col gap-3 pointer-events-none z-[9999] max-w-sm`}
        >
          {positionToasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} />
          ))}
        </div>
      ))}
    </>
  );
}
