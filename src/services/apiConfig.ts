

export const API_KEY = "c0cf394a74cb1669ec0536d8d6ddb20d"

const BASE_URL = "https://api.themoviedb.org/3";

const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGNmMzk0YTc0Y2IxNjY5ZWMwNTM2ZDhkNmRkYjIwZCIsIm5iZiI6MTc2MzExMDQ4NC43OTAwMDAyLCJzdWIiOiI2OTE2ZWU1NDkwOGIwZTMwOGJhYzI3OTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4Q924r-GWQ9phIvgtE7OmrZ12hhfGxvimGmWBbmaaek"

export const apiFetch = async (
    endpoint: string,
    options: any = {}
) => {
    // request interceptors

    const config: any = {
        ...options,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${access_token}`,
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