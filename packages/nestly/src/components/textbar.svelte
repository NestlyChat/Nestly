<script lang="ts">
    let text = $state("")
</script>

<input type="text" bind:value={text} class="chatInputField" placeholder="Type a message..." />