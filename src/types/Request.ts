import { HttpMethod } from "./Http";

export interface RequestOptions {
  method: HttpMethod;
  endpoint: string;
  params: Record<string, string | number | undefined>;
}
