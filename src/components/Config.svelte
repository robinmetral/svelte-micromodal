<script lang="ts">
  import { Modal, showModal, closeModal } from "svelte-micromodal";
</script>

<button
  on:click={() =>
    showModal("modal-config", {
      disableScroll: true,
      onShow: () => console.log("Called onShow()"),
    })}
>
  Open the modal
</button>
<Modal
  title="A modal with custom config"
  id="modal-config"
  closeLabel="Close modal"
>
  <p>
    An <code>onShow</code> callback was triggered when the modal opened, check the
    console!
  </p>
  <p>
    This modal also prevents page scroll with the <code>disableScroll</code> option.
  </p>
  <footer>
    <a
      class="button"
      href="https://micromodal.vercel.app/#configuration"
      title="Micromodal configuration docs">View all options</a
    >
    <button on:click={() => closeModal("modal-config")}>Close modal</button>
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
