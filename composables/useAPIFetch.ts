import { useAuth } from "~/store/auth";
import { useRuntimeConfig } from "#imports";

const logoutExceptions = [''];

export const useAPIFetch = async (path: string, opts: RequestInit = {}) => {
    const config = useRuntimeConfig();
    const authStore = useAuth();

    // Set baseURL and headers
    const url = `${config.public.baseURL}${path}`;
    const headers = {
        ...opts.headers,
        Authorization: `Bearer ${authStore.getToken}`,
    };

    try {
        const response = await fetch(url, {
            ...opts,
            headers,
        });

        if (!response.ok) {
            if (response.status === 401 && !logoutExceptions.some(e => path.includes(e))) {
                // Handle logout if unauthorized
                useLogout(); // Assuming useLogout is a function you have defined elsewhere
            }

            // Handle 422 or other errors as needed
            if (response.status === 422) {
                // Handle 422 error
            }

            // Throw an error with a message from the response or a generic one
            const errorData = await response.json();
            throw new Error(errorData.message || 'An error occurred');
        }

        return await response.json();
    } catch (error) {
        // Handle any other errors (e.g., network issues)
        console.error('Fetch error:', error);
        throw error;
    }
};
