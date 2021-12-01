<script lang="ts">
  import { Modal } from "svelte-micromodal";
</script>

<svelte:head>
  <title
    >svelte-micromodal — a Svelte micromodal wrapper for creating light,
    accessible dialogs</title
  >
</svelte:head>

<h1>svelte-micromodal</h1>
<button data-micromodal-trigger="modal-1">Do the thing</button>
<Modal title="Wait a minute" id="modal-1">
  <p>Are you sure you want to do this thing?</p>
  <div class="actions">
    <button on:click={() => console.log("Continued")}>Yes, continue</button>
    <button data-micromodal-close>No, cancel</button>
  </div>
</Modal>

<style>
  p {
    margin: 1rem 0;
  }
  .actions {
    display: flex;
    gap: 1rem;
  }
</style>
