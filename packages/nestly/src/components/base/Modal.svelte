<script>
    import { fade, scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    export let showModal = false;

    let headerSlot;
    let footerSlot;

    function handleKeydown(e) {
        if (e.key === 'Escape') {
            showModal = false;
        }
    }

    function closeModal() {
        showModal = false;
    }

    function stopPropagation(e) {
        e.stopPropagation();
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

{#if showModal}
    <div
            class="modal-backdrop"
            on:click={closeModal}
            transition:fade={{ duration: 200 }}
            role="dialog"
            aria-modal="true"
            aria-label="Modal dialog"
    >
        <div
                class="modal-content"
                on:click={stopPropagation}
                transition:scale={{ duration: 300, easing: quintOut, start: 0.8 }}
                role="document"
                aria-describedby="modal-description"
        >
            <div class="modal-header" aria-label="Modal header">
                <slot name="header">
                </slot>
                <button
                        class="close-button"
                        on:click={closeModal}
                        aria-label="Close modal"
                >×</button>
            </div>

            <div class="modal-body" id="modal-description" aria-label="Modal content">
                <slot>
                </slot>
            </div>

            {#if $$slots.footer}
                <div class="modal-footer" aria-label="Modal footer">
                    <slot name="footer">
                    </slot>
                </div>
            {/if}
        </div>
    </div>
{/if}

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        max-width: 500px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
    }

    .close-button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        margin: 0;
        line-height: 1;
    }

    .modal-body {
        margin-bottom: 15px;
    }

    .modal-footer {
        display: flex;
        justify-content: flex-end;
        padding-top: 10px;
        border-top: 1px solid #eee;
    }
</style>