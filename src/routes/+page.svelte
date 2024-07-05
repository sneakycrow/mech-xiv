<script lang="ts">
	import ProfileMini from '$lib/components/ProfileMini.svelte';
	import Icon from '@iconify/svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<section class="col-span-4 col-start-2 flex flex-col items-center justify-center space-y-4">
	<article
		class="rounded-md border-4 border-primary-500 bg-secondary-700 p-8 text-center shadow-xl"
	>
		<h1 class="text-5xl">sharlayan</h1>
		<h3 class="text-xl">Coming Soon</h3>
		<p class="my-4">A web app for viewing and managing Final Fantasy XIV guides</p>
	</article>
	<aside>
		{#if data?.username}
			<div class="flex flex-col items-end justify-end text-primary-500">
				<p>Signed in as</p>
				<ProfileMini avatar={data.avatar} username={data.username} />
			</div>
		{:else}
			<a
				href="/login/discord"
				class="flex flex-nowrap items-center justify-center space-x-2 rounded-md border-2 border-primary-500 bg-tertiary-500 px-4 py-2 transition-colors hover:bg-tertiary-300"
			>
				<Icon icon="ic:baseline-discord" class="h-10 w-10" />
				<span>Sign in with Discord</span></a
			>
		{/if}
	</aside>
</section>
