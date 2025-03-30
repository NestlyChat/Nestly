<script lang="ts">
    let { text, viewBox, size, color, dPath } = $props<{
        text: string;
        viewBox?: string;
        size?: string;
        color?: string;
        dPath?: string;
    }>();
</script>

<button class="chatSendButton" aria-label={text}>
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