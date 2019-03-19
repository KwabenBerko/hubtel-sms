import { BaseMessage } from "./BaseMessage";

export interface QuickSendMessage extends BaseMessage {
  /**
   * @property Optional. A true or false setting to indicate a delivery report request
   */
  RegisteredDelivery?: boolean;
}
