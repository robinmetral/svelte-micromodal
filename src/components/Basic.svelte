<script lang="ts">
  import { Modal, showModal, closeModal } from "svelte-micromodal";
</script>

<button on:click={() => showModal("modal-basic")}>Open the modal</button>
<Modal title="A basic modal" id="modal-basic" closeLabel="Close modal">
  <p>This is the modal body.</p>
  <p>
    It can contain anything—the first interactive element will receive focus
    when the modal is opened.
  </p>
  <footer>
    <button>Stay here</button>
    <button on:click={() => closeModal("modal-basic")}>Close modal</button>
  </footer>
</Modal>

<style>
  p {
    margin: 16px 0;
  }
  footer {
    display: flex;
    gap: 16px;
  }
</style>
