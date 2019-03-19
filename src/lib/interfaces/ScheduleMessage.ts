import { BaseMessage } from "./BaseMessage";

export interface ScheduleMessage extends BaseMessage {
  /**
   * @property Optional. Indicates the type of message to be sent. Possible values are: Unset(default) 0 - Text message 1 - Binary message 2 - Unicode based message
   */
  Type?: number;

  /**
   * @property The is automatically converted to GMT, in case you want it in UTC, kindly change it in your Unity Account.
   */
  Time: string;
}
