<script lang="ts">
    let {text, viewBox, width, height, color, dPath} = $props<{text: string, viewBox?: string, width?: number, height?: number, color?: string, dPath?: string}>();
</script>

<div class="flex">
    <svg {viewBox} {width} {height} style="color: {color}">
        <path fill={color} d={dPath}/>
    </svg>
    <button class="chatSendButton" aria-label={text}>
        {text}
    </button>
</div>