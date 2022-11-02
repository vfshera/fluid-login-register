<script>
	import Input from './ui/Input.svelte';
</script>

<section class="signin-form w-2/5 text-white flex flex-col justify-between">
	<h1 class="uppercase text-5xl font-bold">Sign Up</h1>

	<form action="" class="flex flex-col gap-3">
		<Input inputLabel="Username" type="text" />
		<Input inputLabel="Email" type="text" />
		<Input inputLabel="Password" type="Password" />
		<Input inputLabel="Confirm Password" type="text" />
	</form>
</section>
