import request from "request";
import utf8 from "utf8";
import base64 from 'base-64';


class Hubtel{
  constructor(config){
    this.config = config;
    let bytes = utf8.encode(`${this.config.clientId}:${this.config.clientSecret}`);
    this.credentials =base64.encode(bytes);

    this.options = {
        url: "",
        headers:{
            "Content-Type": "application/json",
            "Cache-Control":" no-cache"
        },
        json: true
    }
  }

  sendSMS({from, to, message, registeredDelivery}){
    return new Promise((resolve, reject) => {
      this.options.url = `https://api.hubtel.com/v1/messages/send?From=${from}&To=%2B${to}&Content=${message}&ClientId=${this.config.clientId}&ClientSecret=${this.config.clientSecret}&RegisteredDelivery=${registeredDelivery}`;

      request.get(this.options, (err, response, body) => {
        if(err){
          return reject(err);
        }
        resolve(body);
      })
    });
  }
  
}


module.exports = Hubtel;