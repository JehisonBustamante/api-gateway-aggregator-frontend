// src/routes/+page.ts
export const load = async ({ url, fetch }) => {
	const page = url.searchParams.get('page') || '1';
	const limit = '6';

	try {
		// USAMOS LA RUTA REAL: /v1/feed
		const response = await fetch(`https://aggregator-service-399040611256.us-central1.run.app/v1/feed?page=${page}&limit=${limit}`);

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
		return { aggregatorData: null, currentPage: 1 };
	}
};