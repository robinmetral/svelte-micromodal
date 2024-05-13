<script lang="ts">
  import MicroModal from "micromodal";
  import type { MicroModalConfig } from "micromodal";
  import { onMount } from "svelte";

  /**
   * A title to describe the modal's purpose. It is used by assistive
   * technology to give users contextual information about the dialog, and
   * rendered as a heading in the modal header.
   */
  export let title: string;
  /**
   * A unique id used by `micromodal` to set up the modal bindings.
   */
  export let id: string;
  /**
   * An accessible label for the modal's close button, e.g. "Close modal".
   * Intentionally required to make sure that it is explicitly set (and
   * localized if necessary).
   */
  export let closeLabel: string;
  /**
   * A custom SVG icon to replace the default close icon (from Feather Icons).
   * Make sure it has `role="presentation"` to hide it from screen readers.
   */
  export let closeIcon = `<svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>`;
  /**
   * Custom config passed to `MicroModal.init()`.
   */
  export let mmConfig: MicroModalConfig = undefined;
  /**
   * Custom styles for the modal overlay.
   */
  export let overlayStyles: string = undefined;
  /**
   * Custom styles for the modal container.
   */
  export let containerStyles: string = undefined;
  /**
   * Custom styles for the modal header.
   */
  export let headerStyles: string = undefined;
  /**
   * Custom styles for the modal title.
   */
  export let titleStyles: string = undefined;
  /**
   * Custom styles for the modal's close button.
   */
  export let closeStyles: string = undefined;
  /**
   * Custom classes for the modal overlay.
   */
  export let overlayClass: string = undefined;
  /**
   * Custom classes for the modal container.
   */
  export let containerClass: string = undefined;
  /**
   * Custom classes for the modal header.
   */
  export let headerClass: string = undefined;
  /**
   * Custom classes for the modal title.
   */
  export let titleClass: string = undefined;
  /**
   * Custom classes for the modal's close button.
   */
  export let closeClass: string = undefined;

  let ref;
  onMount(() => {
    // init micromodal
    MicroModal.init(mmConfig);
    // move modal to portal
    document.body.appendChild(ref);
    // cleanup
    return () => document.body.removeChild(ref);
  });

  $: titleCls = "mm-title" + (titleClass ? ` ${titleClass}` : "");
  $: closeCls = "mm-close" + (closeClass ? ` ${closeClass}` : "");
  $: headerCls = "mm-header" + (headerClass ? ` ${headerClass}` : "");
  $: containerCls = "mm-container" + (containerClass ? ` ${containerClass}` : "");
  $: overlayCls = "mm-overlay" + (overlayClass ? ` ${overlayClass}` : "");
</script>

<div class="mm-modal" {id} aria-hidden="true" bind:this={ref}>
  <div
    class={overlayCls}
    tabindex="-1"
    style={overlayStyles || undefined}
    data-micromodal-close />
  <div
    class={containerCls}
    role="dialog"
    aria-modal="true"
    aria-labelledby={`${id}-title`}
    style={containerStyles || undefined}>
    <header class={headerCls} style={headerStyles || undefined}>
      <h2 class={titleCls} id={`${id}-title`} style={titleStyles || undefined}>
        {title}
      </h2>
      <!-- we need to use the data attribute here to avoid the close button from getting focused as the first interactive element in the modal -->
      <button
        class={closeCls}
        style={closeStyles || undefined}
        data-micromodal-close>
        {@html closeIcon}
        <span class="sr-only">{closeLabel}</span>
      </button>
    </header>
    <slot />
  </div>
</div>

<style>
  .mm-modal {
    display: none;
  }

  /* is-open is set by micromodal and shouldn't be purged */
  .mm-modal:global(.is-open) {
    display: block;
  }

  .mm-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .mm-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 24px;
    width: 512px;
    border-radius: 24px;
    max-height: 100vh;
    overflow-y: auto;
  }

  .mm-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mm-close {
    cursor: pointer;
    display: flex;
    color: currentColor;
    background: none;
    border: none;
    padding: 0;
  }

  .mm-close :global(svg) {
    /**
     * This ensures that a clicking the svg still fires onclick on the button.
     * It looks like an issue with how micromodal deals with data attributes,
     * since this is not a problem when using on:click(() => closeModal(id)).
     */
    pointer-events: none;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
