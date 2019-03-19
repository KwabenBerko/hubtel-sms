import axios from "axios";
import qs from "querystring";
import { Config } from "./interfaces/Config";
import { QuickSendMessage } from "./interfaces/QuickSendMessage";
import { SendMessage } from "./interfaces/SendMessage";
import { ScheduleMessage } from "./interfaces/ScheduleMessage";
import { SendMessageResponse } from "./interfaces/SendMessageResponse";
import { getCommonHeaders } from "./utils/helper";
import { Message } from "./interfaces/Message";
import { QueryMessageResponse } from "./interfaces/QueryMessageResponse";
import { CancelScheduledMessageResponse } from "./interfaces/CancelScheduledMessageResponse";

const BASE_URL = "https://api.hubtel.com/v1/messages";

export class HubtelSms {
  private headers!: object;
  constructor(private readonly config: Partial<Config>) {
    if (!(config.clientId && config.clientSecret)) {
      throw new Error("Invalid Configuration");
    }

    this.headers = {
      ...getCommonHeaders(
        this.config.clientId as string,
        this.config.clientSecret as string
      )
    };
  }

  quickSend = async (data: QuickSendMessage): Promise<SendMessageResponse> => {
    try {
      const response = await axios.get(
        `${BASE_URL}/send?${qs.stringify(data)}&ClientId=${
          this.config.clientId
        }&ClientSecret=${this.config.clientSecret}`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  sendMessage = async (data: SendMessage) => {
    try {
      const response = await axios.post(`${BASE_URL}`, data, {
        headers: this.headers
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  getMessage = async (messageId: string): Promise<Message> => {
    try {
      const response = await axios.get(`${BASE_URL}/${messageId}`, {
        headers: this.headers
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  queryMessage = async (): Promise<QueryMessageResponse> => {
    try {
      const response = await axios.get(`${BASE_URL}`, {
        headers: this.headers
      });

      return response.data;
    } catch (err) {
      throw err;
    }
  };

  scheduleMessage = async (
    data: ScheduleMessage
  ): Promise<SendMessageResponse> => {
    try {
      const response = await axios.post(`${BASE_URL}`, data, {
        headers: this.headers
      });

      return response.data;
    } catch (err) {
      throw err;
    }
  };

  //Not Working
  rescheduleScheduledMessage = async (
    messageId: string,
    time: string
  ): Promise<SendMessageResponse> => {
    try {
      const response = await axios.put(
        `${BASE_URL}/${messageId}`,
        { Time: time },
        {
          headers: this.headers
        }
      );

      return response.data;
    } catch (err) {
      throw err;
    }
  };

  cancelScheduledMessage = async (
    messageId: string
  ): Promise<CancelScheduledMessageResponse> => {
    try {
      const response = await axios.delete(`${BASE_URL}/${messageId}`, {
        headers: this.headers
      });

      return response.data;
    } catch (err) {
      throw err;
    }
  };
}
