import { QuickSendMessage } from "./QuickSendMessage";

export interface SendMessage extends QuickSendMessage {
  /**
   * @property Optional. Indicates the type of message to be sent. Possible values are: Unset(default) 0 - Text message 1 - Binary message 2 - Unicode based message
   */
  Type?: number;

  /**
   * @property Optional. The User Data Header of the SMS Message being sent. Udh must be HEX string notation.
   */
  Udh?: string;

  /**
   * @property Optional. Indicates if the message originated from this API ("out") or originated from a mobile subscriber ("in"). This attribute is only displayed in response to a query. Possible Values are "in" and "out".
   */
  Direction?: string;

  /**
   * @property Optional. The is automatically converted to GMT, in case you want it in UTC, kindly change it in your Unity Account.
   */
  Time?: string;

  /**
   * @property Optional. Indicates when the message was last updated. Usually when the last delivery report was received on the message
   */
  UpdateTime?: string;

  /**
   * @property Optional. The unique ID for the mobile network a combination of MCC and MNC for this message.
   */
  NetworkId?: string;

  /**
   * @property Optional. A reference set by the client for uniquely identifying this message. The client reference will be sent as part of delivery report notifications.
   */
  ClientReference?: string;

  /**
   * @property Optional. The number of parts or units of this message.
   */
  Units?: number;

  /**
   * @property Optional. The total cost of this message. The default rate plan is messaging credit. Users on a service postpaid plan may have the rates defined in local currency.
   */
  Rate?: number;

  /**
   * @property Optional. The current delivery status of this SMS message.
   */
  Status?: number;

  /**
   * @property Optional. A true or false value indicating if this message must be sent as a flash message.
   */
  FlashMessage?: boolean;
  /**
   * @property
   */
}
