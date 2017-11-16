## hubtel-node
An unofficial nodejs wrapper for sending SMS with [Hubtel](https://hubtel.com/).

**You need to have an official Hubtel Account to use this library.**
## Installation

``` javascript
npm install hubtel-sms
```

## Usage

#### Instantiate the Hubtel class

``` javascript
const Hubtel = require("Hubtel");

let config = {
  clientId: 'YOUR_HUBTEL_CLIENT_ID',
  clientSecret: 'YOUR_HUBTEL_CLIENT_SECRET'
};

const hubtel = new Hubtel(config);

```
### Send SMS Messages

``` javascript

let data = {
  from: "Test Title",
  to: '233570000000',
  message: `Test Message`,
  registeredDelivery: true
}

hubtel.sendSMS(data)
.then(response => {
  console.log(response);
})
.catch(err => {
  console.log(err);
})
```