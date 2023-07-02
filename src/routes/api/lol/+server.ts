import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const number = Math.floor(Math.random() * 6) + 1;
  return json(number);
};