<script lang="ts">
    import Homeicon from "./homeicon.svelte";
</script>

<ul class="serverNav">
    <Homeicon />
</ul>

<style>
    .serverNav {
        position: fixed;
        height: 72px;
        display: flex;
        flex-direction: row;
        background-color: var(--background-primary);
        width: 100%;
        bottom: 0;
    }
</style>
