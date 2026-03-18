<script lang="ts">
	import { goto } from '$app/navigation';

	// 1. Interfaces para TypeScript
	interface AggregatorData {
		weather: { temperature: number; condition: string; city: string };
		stocks: Array<{ symbol: string; price: number; change: number }>;
		news: Array<{ title: string; source: string; description: string; url: string }>;
	}

	// 2. Recibimos los datos
	let { data }: { data: { aggregatorData: AggregatorData; currentPage: number } } = $props();

	// 3. Función de navegación
	function changePage(newPage: number) {
		// eslint-disable-next-line svelte/no-navigation-without-resolve
		goto(`?page=${newPage}`);
	}

	// 4. Configuración visual del Clima
	const weatherConfig: Record<string, { icon: string; bg: string; label: string }> = {
		'Sunny': { icon: '☀️', bg: 'from-blue-400 to-blue-600', label: 'Soleado' },
		'Clear': { icon: '🌙', bg: 'from-gray-800 to-blue-900', label: 'Despejado' },
		'Cloudy': { icon: '☁️', bg: 'from-gray-500 to-gray-700', label: 'Nublado' },
		'Partly cloudy': { icon: '⛅', bg: 'from-blue-300 to-gray-500', label: 'Parcialmente Nublado' },
		'Rain': { icon: '🌧️', bg: 'from-blue-700 to-blue-900', label: 'Lluvia' },
		'Patchy rain nearby': { icon: '🌦️', bg: 'from-blue-400 to-gray-600', label: 'Lluvia Ligera' },
		'Overcast': { icon: '☁️', bg: 'from-gray-600 to-gray-800', label: 'Cubierto' }
	};

	// Clima actual derivado
	const currentCondition = $derived(
		weatherConfig[data.aggregatorData.weather.condition] ||
		{ icon: '🌡️', bg: 'from-blue-600 to-blue-800', label: data.aggregatorData.weather.condition }
	);
</script>

<main class="space-y-10 max-w-6xl mx-auto p-4">
	{#if data.aggregatorData}
		<section class="bg-gradient-to-br {currentCondition.bg} p-8 rounded-3xl shadow-2xl transition-all duration-500">
			<div class="flex justify-between items-center text-white">
				<div>
					<h3 class="text-white/70 text-xs font-black uppercase tracking-[0.2em]">Clima en {data.aggregatorData.weather.city}</h3>
					<p class="text-6xl font-bold mt-2">{data.aggregatorData.weather.temperature}°C</p>
					<p class="text-xl font-medium mt-1 opacity-90">
						{currentCondition.label} ({data.aggregatorData.weather.condition})
					</p>
				</div>
				<div class="text-8xl drop-shadow-lg">{currentCondition.icon}</div>
			</div>
		</section>

		<section>
			<div class="bg-orange-900/20 border border-orange-500/30 p-5 rounded-2xl mb-8 flex items-start gap-4">
				<div class="text-orange-400 text-2xl">💡</div>
				<div class="text-sm text-gray-200 leading-relaxed">
					<p class="font-bold text-orange-300 mb-2">¿Qué son las acciones?</p>
					<p>
						Imagina que estas empresas son una <span class="text-orange-400 font-bold">torta gigante</span>.
						Como es muy cara, se divide en millones de rebanadas llamadas <span class="text-white font-bold text-lg">"Acciones"</span>.
						Abajo verás un registro de cuánto cuesta comprar <span class="italic">una sola rebanada</span> hoy.
					</p>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each data.aggregatorData.stocks as stock (stock.symbol)}
					<div class="bg-gray-800 p-6 rounded-2xl border-l-4 {stock.change >= 0 ? 'border-green-500' : 'border-red-500'} shadow-lg hover:bg-gray-750 transition-colors">
						<div class="flex justify-between items-center mb-4">
							<span class="text-gray-400 font-black text-xl uppercase tracking-tighter">
								{stock.symbol === '^IPSA' ? 'Índice IPSA' : stock.symbol.replace('.SN', '').replace('^', '')}
							</span>
							<span class="text-3xl font-mono font-bold text-white">
								{stock.symbol === '^IPSA' ? stock.price.toLocaleString('es-CL') : '$' + stock.price.toLocaleString('es-CL')}
							</span>
						</div>

						<div class="bg-black/30 p-4 rounded-xl">
							<p class="text-[13px] text-gray-300 leading-snug">
								{#if stock.symbol === '^IPSA'}
									El <span class="text-orange-400 font-bold">IPSA</span> es un puntaje que mide la salud de las 30 empresas más grandes de Chile. Hoy está en <span class="text-white font-bold">{stock.price.toLocaleString('es-CL')} puntos</span>.
								{:else}
									Para ser "dueño" de un pedacito de <span class="text-orange-400 font-bold">{stock.symbol.includes('FALABELLA') ? 'Falabella' : stock.symbol.replace('.SN', '')}</span>, pagas <span class="text-white font-bold">${stock.price.toLocaleString('es-CL')} pesos</span>.
								{/if}
								Hoy, este valor
								<span class={stock.change >= 0 ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
									{stock.change >= 0 ? 'subió (+ ' : 'bajó (- '}{Math.abs(stock.change)}%)
								</span> respecto a ayer.
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section>
			<h2 class="text-xl font-bold mb-6 uppercase text-gray-500 tracking-widest border-b border-gray-800 pb-2">Noticias de Hoy</h2>
			<div class="grid gap-4">
				{#each data.aggregatorData.news as article (article.title)}
					<a
						href={article.url}
						target="_blank"
						rel="external noreferrer noopener"
						class="bg-gray-800 p-5 rounded-xl border border-gray-700 hover:border-orange-500/50 hover:bg-gray-750 transition-all block group cursor-pointer"
					>
						<div class="flex justify-between items-start">
            <span class="text-orange-500 text-[10px] font-black uppercase bg-orange-500/10 px-2 py-1 rounded">
                {article.source}
            </span>
							<span class="text-gray-600 text-[10px] font-bold uppercase group-hover:text-orange-400 transition-colors">
                Leer noticia ↗
            </span>
						</div>

						<h3 class="font-bold text-lg mt-2 leading-tight group-hover:text-white transition-colors">
							{article.title}
						</h3>
						<p class="text-gray-400 text-sm mt-2 line-clamp-2">
							{article.description}
						</p>
					</a>
				{/each}
			</div>
		</section>

		<div class="flex gap-4 items-center justify-center py-10">
			<button class="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-xl transition disabled:opacity-20" onclick={() => changePage(data.currentPage - 1)} disabled={data.currentPage <= 1}>Anterior</button>
			<span class="text-gray-500 font-mono">Página {data.currentPage}</span>
			<button class="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-xl transition" onclick={() => changePage(data.currentPage + 1)}>Siguiente</button>
		</div>

	{:else}
		<div class="flex flex-col items-center justify-center h-64 space-y-4">
			<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
			<p class="text-gray-500 animate-pulse text-sm uppercase tracking-widest">Sincronizando con Epsilon Backend...</p>
		</div>
	{/if}
</main>