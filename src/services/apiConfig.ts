
const BASE_URL = "https://api.themoviedb.org/3";

export const apiFetch = async (
    endpoint: string,
    options: any = {}
) => {
    // request interceptors

    const config: any = {
        ...options,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            ...options.headers,
        }
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);

        if (response.status === 401) {
            console.log("Not Authorized")
        }

        if (!response.ok) {
            throw new Error(await response.text())
        }

        return response.json();
    } catch (error) {
        console.error("API Error", error);
        throw error;
    }

}