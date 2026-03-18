<script lang="ts">
	import '../app.css';
	let { children } = $props();

	// Aquí pondrás la URL de tu portfolio principal cuando la tengas
	const portfolioUrl = "https://tu-portfolio-principal.vercel.app";
</script>

<div class="flex h-screen bg-gray-900 text-white font-sans selection:bg-orange-500/30">
	<aside class="w-72 bg-gray-950 border-r border-gray-800 flex flex-col shadow-2xl">

		<div class="p-8">
			<h1 class="text-2xl font-black text-white tracking-tighter leading-none">
				JEHISON <span class="text-orange-500 text-3xl">.</span><br/>
				BUSTAMANTE
			</h1>
			<p class="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] mt-3">
				Software Engineer
			</p>
		</div>

		<nav class="flex-1 px-6 space-y-8">

			<div>
				<p class="text-[10px] font-black text-gray-600 uppercase mb-4 tracking-widest">Visualizando ahora</p>
				<div class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 font-bold shadow-inner">
					<span class="text-xl">🚀</span>
					<span class="text-sm">Gateway Aggregator</span>
				</div>
			</div>

			<div class="pt-4">
				<a
					href={portfolioUrl}
					class="group relative block w-full p-[2px] rounded-2xl bg-gradient-to-br from-orange-400 to-orange-700 shadow-lg shadow-orange-900/20 hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 active:scale-95"
				>
					<div class="bg-gray-950 rounded-[14px] py-4 px-4 transition-colors group-hover:bg-transparent">
       <span class="relative z-10 flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest text-white">
        🏠 Ir al Portfolio
       </span>
					</div>
				</a>
				<p class="text-[10px] text-center text-gray-600 mt-4 italic">
					Explora mis otros desarrollos
				</p>
			</div>
		</nav>

		<div class="p-6 border-t border-gray-900">
			<div class="flex items-center gap-2 bg-gray-900/50 px-3 py-2 rounded-full w-fit border border-gray-800">
     <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
     </span>
				<span class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Server: Online</span>
			</div>
		</div>
	</aside>

	<main class="flex-1 overflow-y-auto bg-gray-900 bg-[size:40px_40px] bg-[radial-gradient(theme(colors.gray.800/10%)_1px,transparent_1px)] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black">
		<div class="max-w-5xl mx-auto py-12 px-8">
			{@render children()}
		</div>
	</main>
</div>