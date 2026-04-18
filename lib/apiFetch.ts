const BASE_URL = "https://campers-api.goit.study";

export async function apiFetch<T>(url: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${url}`);

    if (!res.ok) {
        throw new Error("API error");
    }

    return res.json();
}