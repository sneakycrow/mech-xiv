<script lang="ts">
	export let avatar: string;
	export let username: string;
</script>

<aside>
	<div class="grid grid-cols-4">
		<img src={avatar} alt={`avatar for ${username}`} class="col-span-1 h-16 w-16 rounded-full" />
		<div class="col-span-3">
			<h1 class="text-2xl">{username}</h1>
		</div>
		<form action="/?/logout" method="post" class="col-start-4 text-right">
			<button
				class="cursor-pointer font-semibold text-tertiary-600 hover:text-red-500"
				type="submit">Log Out</button
			>
		</form>
	</div>
</aside>
