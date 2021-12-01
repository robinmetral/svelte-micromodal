<script lang="ts">
  import { Modal } from "svelte-micromodal";
</script>

<svelte:head>
  <title
    >svelte-micromodal — a Svelte micromodal wrapper for creating light,
    accessible dialogs</title
  >
</svelte:head>

<main>
  <h1>svelte-micromodal</h1>
  <p>
    <code>svelte-micromodal</code> is a small
    <a
      href="https://github.com/sveltejs/svelte"
      title="Svelte repository on GitHub">Svelte</a
    >
    wrapper around
    <a
      href="https://github.com/Ghosh/micromodal"
      title="Micromodal repository on GitHub">Micromodal</a
    >, a small JavaScript library for creating accessible modal dialogs.
  </p>
  <button data-micromodal-trigger="modal-1">Do the thing</button>
  <Modal title="Wait a minute" id="modal-1" closeLabel="Close modal">
    <p class="modal-body">Are you sure you want to do this thing?</p>
    <div class="modal-actions">
      <button on:click={() => console.log("Continued")}>Yes, continue</button>
      <button data-micromodal-close>No, cancel</button>
    </div>
  </Modal>
</main>

<style>
  main {
    max-width: 768px;
    padding: 48px 16px;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    margin-bottom: 24px;
  }
  p {
    margin-bottom: 24px;
  }
  .modal-body {
    margin-top: 16px;
  }
  .modal-actions {
    display: flex;
    gap: 16px;
  }
</style>
