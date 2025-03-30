<script lang="ts">
    let text = $state<{ text: string }>({ text: "hello" });
    let { fuckya } = $props<{ fuckya: string }>();
</script>

<input
    type="text"
    bind:value={text.text}
    class="chatInputField"
    placeholder="Type a message..."
/>
