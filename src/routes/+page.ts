// src/routes/+page.ts
import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export const load = async ({ url, fetch }) => {
	const page = url.searchParams.get('page') || '1';
	const limit = '6';

	try {
		// Construimos la URL usando la variable de entorno
		// Asegúrate de que en Vercel la URL NO termine en "/"
		const apiUrl = `${PUBLIC_API_URL}/v1/feed?page=${page}&limit=${limit}`;

		console.log("Conectando a:", apiUrl);

		const response = await fetch(apiUrl);

		if (!response.ok) {
			throw new Error(`Error en la API: ${response.status}`);
		}

		const data = await response.json();

		return {
			aggregatorData: data,
			currentPage: parseInt(page)
		};
	} catch (error) {
		console.error("Error conectando con Gateway Aggregator:", error);
		// Retornamos null para que el frontend muestre el estado de "Cargando..." o error
		return {
			aggregatorData: null,
			currentPage: 1
		};
	}
};