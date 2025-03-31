<script lang="typescript">
	let { data } = $props();
</script>

<div>
	<h2>Guild Id: {data.guild}</h2>
	{#if data.channel}
		<h2>Channel Id: {data.channel}</h2>
	{/if}
</div>