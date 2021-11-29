<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Modal from "../lib/Modal.svelte";
</script>

<Meta
  title="Modal"
  component={Modal}
  argTypes={{
    id: { control: "text" },
    title: { control: "text" },
  }}
/>

<Template let:args>
  <button data-micromodal-trigger="modal-1">Open modal</button>
  <Modal {...args}>
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
</Template>

<Story
  name="Base"
  args={{
    id: "modal-1",
    title: "Wait a minute",
  }}
/>
