export interface BaseMessage {
  /**
   * @property The sender address. In case it is a telephone number it must comply with the telephone rules.
   */
  From: string;

  /**
   * @property The recipient telephone number. It must comply with the telephone rules.
   */
  To: string;

  /**
   * @property The message content
   */
  Content: string;
}
