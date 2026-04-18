export async function apiFetch<T>(
    url: string,
    options: RequestInit = {}
): Promise<T> {
    const res = await fetch(`https://campers-api.goit.study${url}`, {
        headers: {
        "Content-Type": "application/json",
        ...options.headers,
        },
        ...options,
    });

    if (!res.ok) {
        throw new Error("API error");
    }

    return res.json();
}