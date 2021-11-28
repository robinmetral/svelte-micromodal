<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Modal from "../lib/Modal.svelte";
</script>

<Meta
  title="Modal"
  component={Modal}
  argTypes={{
    label: { control: "text" },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <Modal {...args} on:click={args.onClick} />
</Template>

<Story
  name="Base"
  args={{
    label: "Button",
  }}
/>
