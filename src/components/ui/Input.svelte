<script>
	export let inputLabel = '';
	export let inputValue = '';

	let focused = false;
</script>

<div class="input-group relative w-full overflow-hidden font-semibold">
	<label
		for={inputLabel.toLowerCase()}
		data-text={inputLabel}
		class="pointer-events-none text-gray-100 h-full before:content-[attr(data-text)] whitespace-nowrap before:overflow-hidden  before:mt-2  relative before:absolute before:transition-transform before:ease-out   {focused
			? 'before:-translate-x-[100%]'
			: 'before:w-max'}"
	/>
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

<style>
</style>
