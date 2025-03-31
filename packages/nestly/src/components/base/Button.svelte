<script lang="ts">
    let { text, leftIcon, rightIcon, color, size = "24", onClick } = $props<{
        text: string;
        leftIcon?: { 
            dPath: string;
            viewBox?: string;
            color?: string;
        };
        rightIcon?: { 
            dPath: string;
            viewBox?: string;
            color?: string;
        };
        color?: string;
        size?: string;
        onClick?: () => void;
    }>();
</script>

<button class="menuButton" onclick={onClick} aria-label={text} style:color={color || "var(--font-color)"}>
    {#if leftIcon}
        <svg
            viewBox={leftIcon.viewBox || "0 0 24 24"}
            width={size}
            height={size}
            class="leftIcon"
        >
            <path fill={leftIcon.color || "currentColor"} d={leftIcon.dPath} />
        </svg>
    {/if}
    
    <span class="buttonText">{text}</span>
    
    {#if rightIcon}
        <svg
            viewBox={rightIcon.viewBox || "0 0 24 24"}
            width={size}
            height={size}
            class="rightIcon"
        >
            <path fill={rightIcon.color || "currentColor"} d={rightIcon.dPath} />
        </svg>
    {/if}
</button>

<style>
    .menuButton {
        cursor: pointer;
        transition: border ease 0.2s;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 52px;
        background-color: var(--background-primary);
        border-radius: 6px;
        padding: 6px 12px;
        width: 240px;
        text-align: left;
        border: 1px solid transparent;
        position: relative;
    }
    
    .menuButton:hover {
        border: 1px solid var(--primary-accent);
    }
    
    .leftIcon {
        margin-right: 8px;
        flex-shrink: 0;
    }
    
    .rightIcon {
        margin-left: auto;
        flex-shrink: 0;
    }
    
    .buttonText {
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>