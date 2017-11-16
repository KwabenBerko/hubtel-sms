"use strict";

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

var _utf = require("utf8");

var _utf2 = _interopRequireDefault(_utf);

var _base = require("base-64");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Hubtel {
  constructor(config) {
    this.config = config;
    let bytes = _utf2.default.encode(`${this.config.clientId}:${this.config.clientSecret}`);
    this.credentials = _base2.default.encode(bytes);

    this.options = {
      url: "",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": " no-cache"
      },
      json: true
    };
  }

  sendSMS({ from, to, message, registeredDelivery }) {
    return new Promise((resolve, reject) => {
      this.options.url = `https://api.hubtel.com/v1/messages/send?From=${from}&To=%2B${to}&Content=${message}&ClientId=${this.config.clientId}&ClientSecret=${this.config.clientSecret}&RegisteredDelivery=${registeredDelivery}`;

      _request2.default.get(this.options, (err, response, body) => {
        if (err) {
          return reject(err);
        }
        resolve(body);
      });
    });
  }

}

module.exports = Hubtel;