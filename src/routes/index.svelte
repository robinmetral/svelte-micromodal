<script lang="ts">
  import Basic from "../components/Basic.svelte";
  import Config from "../components/Config.svelte";
  import Styles from "../components/Styles.svelte";

  /* eslint-disable no-useless-escape */
  const basicMarkup = `<script>
  import { Modal, showModal, closeModal } fom "svelte-micromodal";
<\/script>

<!-- 1 -->
<button on:click={() => showModal("modal-basic")}>
  Open the modal
</button>

<!-- 2 -->
<Modal title="A basic modal" id="modal-basic" closeLabel="Close modal">
  <p>This is the modal body.</p>
  <p>It can contain anything—the first interactive element will receive focus when the modal is opened.</p>
  <footer>
    <button>Stay here</button>
    <button on:click={() => closeModal("modal-basic")}>Close modal</button>
  </footer>
</Modal>`;

  const configMarkup = `<button on:click={() => showModal("modal-config", {
  disableScroll: true,
  onShow: () => console.log("Called onShow()"),
})}>
  Open the modal
</button>

<Modal id="modal-config" />`;

  const stylesMarkup = `<Modal
  title="A modal with dark mode"
  id="modal-styles"
  closeLabel="Close modal"
  containerStyles="background-color:var(--color-bg);color:var(--color-text);"
>
  <p>This modal supports dark mode!</p>
  <!-- ... -->
</Modal>

<\style>
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
</style>`;
  /* eslint-enable no-useless-escape */
</script>

<svelte:head>
  <title>
    svelte-micromodal — a Svelte wrapper around Micromodal to create light,
    accessible modal dialogs.
  </title>
</svelte:head>

<main>
  <h1>svelte-micromodal</h1>
  <p>
    <code>svelte-micromodal</code> is a
    <a
      href="https://github.com/sveltejs/svelte"
      title="Svelte repository on GitHub">Svelte</a
    >
    wrapper around
    <a
      href="https://github.com/Ghosh/micromodal"
      title="Micromodal repository on GitHub">Micromodal</a
    > to create light, accessible modal dialogs.
  </p>
  <p>Here's a basic example:</p>
  <Basic />
  <h2>Usage</h2>
  <p>Here's the Svelte markup for the example modal above:</p>
  <pre>
    {basicMarkup}
  </pre>
  <ol>
    <li>
      To open the modal, call the <code>showModal()</code> method with the modal
      id
    </li>
    <li>
      Pass the id as a prop to the <code>Modal</code> component, along with other
      required props
    </li>
    <li>
      To close the modal on button click, call the <code>closeModal()</code> method
      with the modal id. The built-in close button takes care of this for you.
    </li>
  </ol>
  <h2>Configuration</h2>
  <p>
    Any of <a href="https://micromodal.vercel.app/#configuration"
      >Micromodal's configuration options</a
    >
    can be passed as a second argument of the <code>showModal()</code> method.
  </p>
  <p>
    For example, to create a modal that prevents page scroll while it's open,
    and that has a custom <code>onShow</code> callback, you could do this:
  </p>
  <pre>
    {configMarkup}
  </pre>
  <p>Which results in:</p>
  <Config />
  <h2>Styling</h2>
  <p>
    The modal comes with little default UI, although enough to make it usable
    out of the box.
  </p>
  <p>
    It will also inherit some of your global styles, in order to make it
    consistent with the rest of your UI (e.g. the modal's title will inherit any
    global <code>h2</code> rules; the modal's copy will inherit the
    <code>currentColor</code>).
  </p>
  <p>
    If you need to customize the default styles, custom styles can be passed as
    props to all modal DOM elements. You can also pass a custom <code
      >closeIcon</code
    > SVG to override the built-in icon.
  </p>
  <p>For example, here's how you could add dark mode support to a modal:</p>
  <pre>{stylesMarkup}</pre>
  <Styles />
  <h2>Contact</h2>
  Report issues, suggest improvements or simply ask questions on
  <a href="https://github.com/robinmetral/svelte-micromodal"
    >the GitHub repository</a
  >. Thank you in advance!
</main>

<style>
  main {
    max-width: 700px;
    padding: 48px 16px;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
  }
  h1,
  h2 {
    margin: 24px 0;
  }
  main > * {
    margin-bottom: 24px;
  }
</style>
