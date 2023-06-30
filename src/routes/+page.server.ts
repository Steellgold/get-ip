import type { PageServerLoad } from "./$types";

export const load = (async ({ getClientAddress, fetch }) => {
  let res = await fetch("http://ip-api.com/json/" + getClientAddress() + "?fields=country,city,isp");
  if (!res.ok) {
    return {
      clientAddress: getClientAddress()
    }
  }

  let pingTime = null;
  const startTime = performance.now();
  try {
    await fetch('https://www.example.com/', { method: 'HEAD' });
    const endTime = performance.now();
    pingTime = Math.round(endTime - startTime);
  } catch (error) {
    console.error('Error while pinging:', error);
  }

  let data = await res.json();
  return {
    clientAddress: getClientAddress(),
    city: data.city,
    country: data.country,
    isp: data.isp,
    pingTime
  }
}) satisfies PageServerLoad;