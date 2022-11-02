<script>
	export let inputLabel = '';
	export let inputValue = '';

	let focused = false;
</script>

<div class="input-group relative w-full overflow-hidden font-semibold">
	<label
		for=""
		class="pointer-events-none text-gray-100 absolute transition-transform duration-200 top-[50%] -translate-y-[50%] {focused
			? '-translate-x-[100%]'
			: ''}">{inputLabel}</label
	>
	<input
		on:focus={() => (focused = true)}
		on:blur={() => {
			if (inputValue !== '') return;
			focused = false;
		}}
		bind:value={inputValue}
		{...$$restProps}
		class="border-b border-[#313638] bg-transparent text-gray-100 w-full p-2 outline-none"
	/>
</div>
