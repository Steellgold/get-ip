<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

<p>Your IP address is {data.clientAddress}</p>

<div class="mx-auto my-0 min-h-screen flex flex-col justify-center items-center">
  <h1 class="text-4xl sm:text-6xl font-extrabold text-white">Your IP address is</h1>
  <h2 class="text-2xl sm:text-4xl font-bold text-white pt-2">{data.clientAddress}</h2>
</div>