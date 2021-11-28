<script>
  import { createEventDispatcher } from "svelte";

  export let label = "Button";

  const dispatch = createEventDispatcher();
  function onClick(event) {
    dispatch("click", event);
  }
</script>

<button type="button" on:click={onClick}>
  {label}
</button>
