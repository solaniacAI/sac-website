import { ref } from 'vue';

interface Toast {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    duration: number;
}

const toasts = ref<Toast[]>([]);

export function useToast() {
    let toastId = 0;

    const addToast = (message: string, type: Toast['type'] = 'info', duration = 3000) => {
        const id = toastId++;
        toasts.value.push({ id, message, type, duration });

        setTimeout(() => {
            removeToast(id);
        }, duration);
    };

    const removeToast = (id: number) => {
        toasts.value = toasts.value.filter(toast => toast.id !== id);
    };

    return {
        toasts,
        addToast,
        removeToast,
    };
}
