import type { PageServerLoad } from "./$types";

export const load = (async ({ getClientAddress }) => {
  return {
    clientAddress: getClientAddress()
  }
}) satisfies PageServerLoad;