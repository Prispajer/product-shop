export const HttpMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
} as const;

export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];

export interface RequestOptions {
  method?: HttpMethod;
  endpoint: string;
  params: Record<string, string | number | undefined>;
}
