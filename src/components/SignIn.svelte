<script>
	import { fade, fly } from 'svelte/transition';
	import { quintInOut, sineInOut } from 'svelte/easing';
	import Input from './ui/Input.svelte';
</script>

<section class="signin-form w-3/5 lg:w-2/5 text-gray-200 flex flex-col justify-between">
	<h1
		data-text="Sign In"
		class="uppercase text-5xl font-bold before:content-[attr(data-text)] whitespace-nowrap before:overflow-hidden  before:mt-2  relative before:absolute before:animate-[cut-text_5s_ease-out_forwards]"
	>
		&nbsp;
	</h1>

	<form
		in:fly={{ delay: 1000, y: 200, duration: 700, opacity: 0, easing: sineInOut }}
		action=""
		class="flex flex-col gap-5"
	>
		<Input inputLabel="Email" type="text" />
		<Input inputLabel="Password" type="password" />
		<div class="flex justify-between items-center">
			<div class="socials flex items-center gap-3">
				<a href="/">
					<svg
						class="h-7 fill-white transition-all duration-200 hover:fill-gray-300"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 24 24"
					>
						<path
							d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"
						/>
					</svg>
				</a>
				<a href="/">
					<svg
						class="h-7 fill-white transition-all duration-200 hover:fill-gray-300"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 30 30"
					>
						<path
							d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"
						/>
					</svg>
				</a>
				<a href="/">
					<svg
						class="h-7 fill-white transition-all duration-200 hover:fill-gray-300"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 32 32"
					>
						<path
							d="M16.003906 14.0625L16.003906 18.265625L21.992188 18.265625C21.210938 20.8125 19.082031 22.636719 16.003906 22.636719C12.339844 22.636719 9.367188 19.664063 9.367188 16C9.367188 12.335938 12.335938 9.363281 16.003906 9.363281C17.652344 9.363281 19.15625 9.96875 20.316406 10.964844L23.410156 7.867188C21.457031 6.085938 18.855469 5 16.003906 5C9.925781 5 5 9.925781 5 16C5 22.074219 9.925781 27 16.003906 27C25.238281 27 27.277344 18.363281 26.371094 14.078125Z"
						/>
					</svg>
				</a>
			</div>

			<button type="submit" class="bg-[#222526] flex justify-center items-center rounded-full w-20">
				<img
					src="right_arrow.svg"
					alt=""
					class="h-10 hover:translate-x-2 transition-transform ease-out duration-500"
				/>
			</button>
		</div>

		<a href="/" class="underline">Forgot Your Password?</a>
	</form>
</section>
