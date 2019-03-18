import { BaseMessage } from "./BaseMessage";

export interface ScheduleMessage extends BaseMessage {
  Type?: number;
  Time: string;
}
