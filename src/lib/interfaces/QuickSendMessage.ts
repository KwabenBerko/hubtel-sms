import { BaseMessage } from "./BaseMessage";

export interface QuickSendMessage extends BaseMessage {
  RegisteredDelivery?: boolean;
}
