import axios from "axios";
import qs from "querystring";
import { Config } from "./interfaces/Config";
import { QuickSendMessage } from "./interfaces/QuickSendMessage";
import { SendMessage } from "./interfaces/SendMessage";
import { ScheduleMessage } from "./interfaces/ScheduleMessage";

const BASE_URL = "https://api.hubtel.com/v1/messages";

export class HubtelSms {
  private headers!: object;
  constructor(private readonly config: Partial<Config>) {
    if (!(config.clientId && config.clientSecret)) {
      throw new Error("Invalid Configuration");
    }
  }

  quickSend = async (data: QuickSendMessage) => {
    return await axios.get(
      `${BASE_URL}/send?${qs.stringify(data)}&ClientId=${
        this.config.clientId
      }&ClientSecret=${this.config.clientSecret}`
    );
  };

  sendMessage = async (data: SendMessage) => {
    return await axios.post(`${BASE_URL}`, data, { headers: this.headers });
  };

  getMessage = async (messageId: string) => {
    return await axios.get(`${BASE_URL}/${messageId}`, {
      headers: this.headers
    });
  };

  queryMessage = async () => {
    return await axios.get(`${BASE_URL}`, {
      headers: this.headers
    });
  };

  scheduleMessage = async (data: ScheduleMessage) => {
    return await axios.post(`${BASE_URL}`, data, {
      headers: this.headers
    });
  };
  rescheduleScheduledMessage = async (messageId: string, time: string) => {
    return await axios.put(
      `${BASE_URL}/${messageId}`,
      { Time: time },
      {
        headers: this.headers
      }
    );
  };

  cancelScheduledMessage = async (messageId: string) => {
    return await axios.delete(`${BASE_URL}/${messageId}`, {
      headers: this.headers
    });
  };
}
