import { ResponseError } from "@/app/_api/error/response-error";

export const handlerError = (error: unknown) => {
  if (error instanceof ResponseError) {
    switch (error.response.status) {
      case 500:
        throw Error("Internal Server Error", { cause: error });
      default:
        throw Error("Unknown Response Error", { cause: error });
    }
  }
  throw new Error("Unknown fetch error", { cause: error });
};
