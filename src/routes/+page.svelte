<script lang="ts">
	import ProfileMini from '$lib/components/ProfileMini.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<section class="col-span-4 col-start-2 flex flex-col items-center justify-center space-y-4">
	<article
		class="rounded-sm border-4 border-primary-500 bg-secondary-700 p-8 text-center shadow-xl"
	>
		<h1 class="text-5xl">sharlayan</h1>
		<h3 class="text-xl text-primary-200">Coming Soon</h3>
		<p class="my-4">A web app for viewing and managing Final Fantasy XIV guides</p>
	</article>
	<aside>
		{#if data?.username}
			<div class="flex flex-col items-end justify-end">
				<p>Signed in as</p>
				<ProfileMini avatar={data.avatar} username={data.username} />
			</div>
		{:else}
			<a href="/login/discord">Sign in with Discord</a>
		{/if}
	</aside>
</section>
