<script lang="ts">
    let { text, viewBox, size, color, dPath } = $props<{
        text: string;
        viewBox?: string;
        size?: string;
        color?: string;
        dPath?: string;
    }>();
</script>

<button class="menuButton" aria-label={text}>
    {#if dPath}
        <svg
            viewBox={viewBox || "0 0 24 24"}
            width={size || "24"}
            height={size || "24"}
        >
            <path fill={color || "currentColor"} d={dPath} />
        </svg>
    {/if}
    {text}
</button>

<style>
    .menuButton {
        transition: border ease 0.2s;
        align-items: center;
        display: flex;
        justify-content: left;
        height: 52px;
        width: 52px;
        color: var(--font-color);
        background-color: var(--background-primary);
        border-radius: 6px;
        padding: 6px 8px;
        width: 240px;
        text-align: left;
        border: 1px solid transparent;

        svg {
            margin-right: 5px;
        }

        &:hover {
            border: 1px solid var(--primary-accent);
        }
    }
</style>
