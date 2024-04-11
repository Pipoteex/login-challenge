const config = {
    baseURL: import.meta.env.VITE_API_URL ?? (window as any).__env.API_URL,
};

export { config };
