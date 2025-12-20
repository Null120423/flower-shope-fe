import {
  toastEmitter,
  ToastMessage,
  ToastPosition,
  ToastType,
} from "./toast-emitter";

/**
 * Static Toast Helper Class
 * Use this to show toast notifications from anywhere without React hooks
 *
 * Examples:
 * Toast.success('Operation completed!')
 * Toast.error('Something went wrong')
 * Toast.warning('Are you sure?', { duration: 5000 })
 * Toast.info('New message', { position: 'bottom-center' })
 */
export class Toast {
  /**
   * Show a success toast notification
   * @param message - The toast message
   * @param options - Optional configuration
   * @returns Toast ID for manual removal if needed
   */
  static success(message: string, options?: Partial<ToastMessage>): string {
    return toastEmitter.success(message, options);
  }

  /**
   * Show an error toast notification
   * @param message - The toast message
   * @param options - Optional configuration
   * @returns Toast ID for manual removal if needed
   */
  static error(message: string, options?: Partial<ToastMessage>): string {
    return toastEmitter.error(message, options);
  }

  /**
   * Show a warning toast notification
   * @param message - The toast message
   * @param options - Optional configuration
   * @returns Toast ID for manual removal if needed
   */
  static warning(message: string, options?: Partial<ToastMessage>): string {
    return toastEmitter.warning(message, options);
  }

  /**
   * Show an info toast notification
   * @param message - The toast message
   * @param options - Optional configuration
   * @returns Toast ID for manual removal if needed
   */
  static info(message: string, options?: Partial<ToastMessage>): string {
    return toastEmitter.info(message, options);
  }

  /**
   * Remove a specific toast by ID
   * @param id - The toast ID to remove
   */
  static remove(id: string): void {
    toastEmitter.removeToast(id);
  }

  /**
   * Remove all toasts
   */
  static removeAll(): void {
    toastEmitter.removeAll();
  }

  /**
   * Get all active toasts
   * @returns Array of active toast messages
   */
  static getAll(): ToastMessage[] {
    return toastEmitter.getToasts();
  }

  /**
   * Show a loading toast that doesn't auto-dismiss
   * @param message - The loading message
   * @param options - Optional configuration
   * @returns Toast ID for manual removal when done
   */
  static loading(message: string, options?: Partial<ToastMessage>): string {
    return toastEmitter.info(message, {
      ...options,
      duration: 0, // Persistent
      title: options?.title || "Loading",
    });
  }

  /**
   * Show a confirmation toast with action button
   * @param message - The confirmation message
   * @param onConfirm - Callback when user confirms
   * @param options - Optional configuration
   * @returns Toast ID for manual removal if needed
   */
  static confirm(
    message: string,
    onConfirm: () => void,
    options?: Partial<ToastMessage>
  ): string {
    return toastEmitter.warning(message, {
      ...options,
      duration: 0, // Persistent until user acts
      action: {
        label: "Confirm",
        onClick: onConfirm,
      },
    });
  }

  /**
   * Show an undo toast
   * @param message - The undo message
   * @param onUndo - Callback when user clicks undo
   * @param options - Optional configuration
   * @returns Toast ID for manual removal if needed
   */
  static undo(
    message: string,
    onUndo: () => void,
    options?: Partial<ToastMessage>
  ): string {
    return toastEmitter.warning(message, {
      ...options,
      duration: 5000,
      action: {
        label: "Undo",
        onClick: onUndo,
      },
    });
  }

  /**
   * Show a promise-based toast (for async operations)
   * @param promise - The promise to track
   * @param messages - Messages for loading, success, and error states
   * @returns Promise with the original result
   */
  static async promise<T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string;
      error: string;
    }
  ): Promise<T> {
    const loadingId = this.loading(messages.loading);

    try {
      const result = await promise;
      this.remove(loadingId);
      this.success(messages.success);
      return result;
    } catch (error) {
      this.remove(loadingId);
      this.error(messages.error);
      throw error;
    }
  }

  /**
   * Show a custom toast with specific type and position
   * @param type - Toast type (success, error, warning, info)
   * @param message - The toast message
   * @param position - Toast position (top-left, top-center, etc.)
   * @param duration - Auto-dismiss duration in ms (0 = persistent)
   * @returns Toast ID for manual removal if needed
   */
  static custom(
    type: ToastType,
    message: string,
    position?: ToastPosition,
    duration?: number
  ): string {
    const options: Partial<ToastMessage> = {};
    if (position) options.position = position;
    if (duration !== undefined) options.duration = duration;

    switch (type) {
      case "success":
        return this.success(message, options);
      case "error":
        return this.error(message, options);
      case "warning":
        return this.warning(message, options);
      case "info":
        return this.info(message, options);
      default:
        return this.info(message, options);
    }
  }

  /**
   * Show multiple toasts at once
   * @param toasts - Array of toast configurations
   * @returns Array of toast IDs
   */
  static multiple(
    toasts: Array<{
      type: ToastType;
      message: string;
      options?: Partial<ToastMessage>;
    }>
  ): string[] {
    return toasts.map(({ type, message, options }) => {
      switch (type) {
        case "success":
          return this.success(message, options);
        case "error":
          return this.error(message, options);
        case "warning":
          return this.warning(message, options);
        case "info":
          return this.info(message, options);
        default:
          return this.info(message, options);
      }
    });
  }

  /**
   * Clear all toasts and show a new one
   * @param type - Toast type
   * @param message - The toast message
   * @param options - Optional configuration
   * @returns Toast ID for manual removal if needed
   */
  static clearAndShow(
    type: ToastType,
    message: string,
    options?: Partial<ToastMessage>
  ): string {
    this.removeAll();
    return this.custom(type, message, options?.position, options?.duration);
  }

  /**
   * Configure default options for all future toasts
   * @param config - Configuration object
   */
  static setConfig(config: {
    defaultDuration?: number;
    defaultPosition?: ToastPosition;
    maxToasts?: number;
  }): void {
    // Note: This would require modifying the ToastEmitter class to expose config
    // For now, toasts use the default config from the emitter
    console.log("Toast config:", config);
  }
}

export default Toast;
