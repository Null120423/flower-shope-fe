"use client";

import { toastEmitter, ToastMessage } from "@/components/Plugin/toast-emitter";
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from "lucide-react";
import { useState } from "react";

interface ToastItemProps {
  toast: ToastMessage;
}

export default function ToastItem({ toast }: ToastItemProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleRemove = () => {
    setIsExiting(true);
    setTimeout(() => {
      toastEmitter.removeToast(toast.id);
    }, 300);
  };

  const iconMap = {
    success: {
      icon: CheckCircle,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      iconColor: "text-green-500",
      progressColor: "bg-green-500",
    },
    error: {
      icon: AlertCircle,
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      iconColor: "text-red-500",
      progressColor: "bg-red-500",
    },
    warning: {
      icon: AlertTriangle,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-800",
      iconColor: "text-yellow-500",
      progressColor: "bg-yellow-500",
    },
    info: {
      icon: Info,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
      iconColor: "text-blue-500",
      progressColor: "bg-blue-500",
    },
  };

  const config = iconMap[toast.type];
  const IconComponent = config.icon;

  return (
    <div
      className={`${config.bgColor} ${
        config.borderColor
      } border rounded-lg shadow-lg overflow-hidden pointer-events-auto transform transition-all duration-300 ${
        isExiting ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
      }`}
    >
      <div className="flex items-start gap-4 p-4">
        {/* Icon */}
        <div className="flex-shrink-0">
          <IconComponent className={`w-6 h-6 ${config.iconColor}`} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {toast.title && (
            <h3 className={`font-semibold ${config.textColor} mb-1`}>
              {toast.title}
            </h3>
          )}
          <p className={`text-sm ${config.textColor} opacity-90`}>
            {toast.message}
          </p>

          {/* Action Button */}
          {toast.action && (
            <button
              onClick={() => {
                toast.action?.onClick();
                handleRemove();
              }}
              className={`mt-2 text-sm font-medium ${config.textColor} hover:opacity-75 transition-opacity underline`}
            >
              {toast.action.label}
            </button>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={handleRemove}
          className={`flex-shrink-0 ${config.textColor} opacity-60 hover:opacity-100 transition-opacity p-1`}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar */}
      {toast.duration && toast.duration > 0 && (
        <div className="h-1 bg-gray-200">
          <div
            className={`h-full ${config.progressColor} animate-shrink`}
            style={{
              animation: `shrink ${toast.duration}ms linear forwards`,
            }}
          />
        </div>
      )}
    </div>
  );
}
