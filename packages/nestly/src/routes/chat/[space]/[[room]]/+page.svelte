<script lang="typescript">
	let { data } = $props();

	import UserStore from "../../../../stores/session.svelte";

	console.log(UserStore.data.token);
	
</script>

<div>
	<h2>Guild Id: {data.guild}</h2>
	{#if data.channel}
		<h2>Channel Id: {data.channel}</h2>
	{/if}
	{#if UserStore.data.token}
		<h2>token: {UserStore.data.token}</h2>
	{/if}
</div>