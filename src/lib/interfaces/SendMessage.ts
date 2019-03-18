import { QuickSendMessage } from "./QuickSendMessage";

export interface SendMessage extends QuickSendMessage {
  Type?: number;
  Udh?: string;
  Direction?: string;
  Time?: string;
  UpdateTime?: string;
  NetworkId?: string;
  ClientReference?: string;
  Units?: number;
  Rate?: number;
  Status?: number;
  FlashMessage?: boolean;
}
