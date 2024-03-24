import { ResponseError } from "@/app/_api/error/response-error";

export const pokemonApi = async (url: RequestInfo): Promise<Response> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new ResponseError("Bad Response", res);
  }

  return res;
};
