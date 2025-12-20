import { EventEmitter } from "events";

export type ToastType = "success" | "error" | "warning" | "info";
export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
  title?: string;
  duration?: number;
  position?: ToastPosition;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface ToastConfig {
  defaultDuration?: number;
  defaultPosition?: ToastPosition;
  maxToasts?: number;
}

class ToastEmitter extends EventEmitter {
  private config: ToastConfig = {
    defaultDuration: 3000,
    defaultPosition: "top-right",
    maxToasts: 5,
  };

  private toasts: Map<string, ToastMessage> = new Map();

  constructor(config?: ToastConfig) {
    super();
    if (config) {
      this.config = { ...this.config, ...config };
    }
  }

  private generateId(): string {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private emitToast(toast: ToastMessage, action: "add" | "remove") {
    super.emit(action, toast);
  }

  private checkMaxToasts() {
    if (this.toasts.size >= (this.config.maxToasts || 5)) {
      const firstKey = this.toasts.keys().next().value;
      if (firstKey) {
        const oldToast = this.toasts.get(firstKey);
        if (oldToast) {
          this.removeToast(firstKey);
        }
      }
    }
  }

  private show(
    type: ToastType,
    message: string,
    options?: Partial<ToastMessage>
  ): string {
    this.checkMaxToasts();

    const id = options?.id || this.generateId();
    const toast: ToastMessage = {
      id,
      type,
      message,
      title: options?.title,
      duration: options?.duration ?? this.config.defaultDuration,
      position: options?.position ?? this.config.defaultPosition,
      action: options?.action,
    };

    this.toasts.set(id, toast);
    this.emitToast(toast, "add");

    if (toast.duration && toast.duration > 0) {
      setTimeout(() => {
        this.removeToast(id);
      }, toast.duration);
    }

    return id;
  }

  success(message: string, options?: Partial<ToastMessage>): string {
    return this.show("success", message, options);
  }

  error(message: string, options?: Partial<ToastMessage>): string {
    return this.show("error", message, options);
  }

  warning(message: string, options?: Partial<ToastMessage>): string {
    return this.show("warning", message, options);
  }

  info(message: string, options?: Partial<ToastMessage>): string {
    return this.show("info", message, options);
  }

  removeToast(id: string) {
    const toast = this.toasts.get(id);
    if (toast) {
      this.toasts.delete(id);
      this.emitToast(toast, "remove");
    }
  }

  removeAll() {
    this.toasts.forEach((_, id) => {
      this.removeToast(id);
    });
  }

  onAdd(callback: (toast: ToastMessage) => void) {
    this.on("add", callback);
  }

  onRemove(callback: (toast: ToastMessage) => void) {
    this.on("remove", callback);
  }

  subscribe(
    onAdd: (toast: ToastMessage) => void,
    onRemove?: (toast: ToastMessage) => void
  ) {
    this.on("add", onAdd);
    if (onRemove) {
      this.on("remove", onRemove);
    }

    return () => {
      this.removeAllListeners("add");
      this.removeAllListeners("remove");
    };
  }

  getToasts(): ToastMessage[] {
    return Array.from(this.toasts.values());
  }
}

export const toastEmitter = new ToastEmitter();
