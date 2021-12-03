<script lang="ts">
  import { Modal, showModal } from "svelte-micromodal";
</script>

<button on:click={() => showModal("modal-styles")}>Open the modal</button>
<Modal
  title="A modal with dark mode"
  id="modal-styles"
  closeLabel="Close modal"
  containerStyles="background-color:var(--color-bg);color:var(--color-text);"
  closeIcon={`<svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`}
>
  <p>This modal supports dark mode!</p>
  <p>
    Toggle your color scheme in your browser dev tools (or OS settings) to see
    it in action.
  </p>
  <p>And while you're here, also notice the custom SVG close icon.</p>
</Modal>

<style>
  :global(html) {
    --color-bg: white;
    --color-text: black;
  }
  @media (prefers-color-scheme: dark) {
    :global(html) {
      --color-bg: black;
      --color-text: white;
    }
  }
  p {
    margin: 16px 0;
  }
</style>
