import { QueryMessageResponseListItem } from "./QueryMessageResponseListItem";

export interface QueryMessageResponse {
  TotalPages: number;
  Messages: Array<QueryMessageResponseListItem>;
}
