import type { PageServerLoad } from "./$types";

export const load = (async ({ getClientAddress, fetch }) => {
  let res = await fetch("http://ip-api.com/json/" + getClientAddress() + "?fields=country,city,isp");
  if (!res.ok) {
    return {
      clientAddress: getClientAddress()
    }
  }

  let data = await res.json();
  return {
    clientAddress: getClientAddress(),
    city: data.city,
    country: data.country,
    isp: data.isp
  }
}) satisfies PageServerLoad;