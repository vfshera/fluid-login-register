<script>
	// @ts-nocheck

	export let inputLabel = '';
	export let inputValue = '';

	export let otherInputProps;

	let focused = false;
</script>

<div class="input-group relative w-full overflow-hidden">
	<label
		for=""
		class="pointer-events-none absolute transition-transform duration-200 top-[50%] -translate-y-[50%] {focused
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
		{...otherInputProps}
		class="border-b border-[#313638] bg-transparent w-full p-2 outline-none"
	/>
</div>
