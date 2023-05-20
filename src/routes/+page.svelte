<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;

  let location: boolean = false;
  if (data.country && data.city && data.isp) location = true;
  else location = false;

  const copyLocation = () => {
    navigator.clipboard.writeText(`${data.city}, ${data.country}`);
  };

  const copyISP = () => {
    navigator.clipboard.writeText(data.isp);
  };

  const copyIP = () => {
    navigator.clipboard.writeText(data.clientAddress);
  };
</script>

<div class="mx-auto my-0 min-h-screen flex flex-col justify-center items-center">
  <h1 class="text-4xl sm:text-6xl font-extrabold text-white">Your IP address is</h1>
  {#if location}
    <div class="flex items-center justify-center gap-3">
      <!-- Icon from tabler-icons.co -->
      <svg xmlns="http://www.w3.org/2000/svg" class="mt-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="#ffffff"></path>
      </svg>

      <h3 class="text-xl sm:text-2xl font-bold text-white pt-2 hover:cursor-pointer" on:click={copyLocation}>
        <code>{data.city}, {data.country}</code>
      </h3>
    </div>

    <div class="flex items-center justify-center gap-3">
      <!-- Icon from tabler-icons.co -->
      <svg xmlns="http://www.w3.org/2000/svg" class="mt-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M20 4v8"></path>
        <path d="M16 4.5v7"></path>
        <path d="M12 5v16"></path>
        <path d="M8 5.5v5"></path>
        <path d="M4 6v4"></path>
        <path d="M20 8h-16"></path>
      </svg>

      <h3 class="text-xl sm:text-2xl font-bold text-white pt-2 hover:cursor-pointer" on:click={copyISP}>
        <code>{data.isp}</code>
      </h3>
    </div>
  {/if}

  <div class="flex items-center justify-center gap-3">
    <!-- Icon from tabler-icons.co -->
    <svg xmlns="http://www.w3.org/2000/svg" class="mt-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M6 10.5l1.436 -4c.318 -.876 .728 -1.302 1.359 -1.302c.219 0 1.054 .365 1.88 .583c.825 .219 .733 -.329 .908 -.487c.176 -.158 .355 -.294 .61 -.294c.242 0 .553 .048 1.692 .448c.759 .267 1.493 .574 2.204 .922c1.175 .582 1.426 .913 1.595 1.507l.816 4.623c2.086 .898 3.5 2.357 3.5 3.682c0 1.685 -1.2 3.818 -5.957 3.818c-6.206 0 -14.043 -4.042 -14.043 -7.32c0 -1.044 1.333 -1.77 4 -2.18z"></path>
      <path d="M6 10.5c0 .969 4.39 3.5 9.5 3.5c1.314 0 3 .063 3 -1.5"></path>
    </svg>
    <h3 class="text-xl sm:text-2xl font-bold text-white pt-2 hover:cursor-pointer" on:click={copyIP}>
      <code>{data.clientAddress}</code>
    </h3>
  </div>
</div>