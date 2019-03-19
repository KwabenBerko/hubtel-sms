## hubtel-sms

### A Node.js wrapper for [Hubtel](https://hubtel.com/)'s Sms API.

**Note: You need to have an official Hubtel Account to use this library.**

## Installation

```
npm install hubtel-sms
```

## Usage

### Instantiate class:

```javascript
import Hubtel from "Hubtel";

const hubtelSms = new HubtelSms({
  clientId: "YOUR_HUBTEL_CLIENT_ID",
  clientSecret: "YOUR_HUBTEL_CLIENT_SECRET"
});
```

## SMS

### (1) Quick Send (Uses a GET Request):

```javascript
try {
  const data = await hubtelSms.quickSend({
    From: "ME",
    Content: "Hello There",
    To: "+23357XXXXXXX"
  });
  console.log(data);
} catch (err) {
  console.log(err);
}
```

### (2) Send Message (Uses a POST Request):

```javascript
try {
  const data = await hubtelSms.sendMessage({
    From: "ME",
    Content: "Hello There",
    To: "+23357XXXXXXX"
  });
  console.log(data);
} catch (err) {
  console.log(err);
}
```

### (3) Get Message:

```javascript
try {
  const message = await hubtelSms.getMessage(
    "e74c56d6-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
  );
  console.log(message);
} catch (err) {
  console.log(err);
}
```

### (4) Query Message:

```javascript
try {
  const data = await hubtelSms.queryMessage();
  console.log(data.TotalPages);
  console.log(data.Messages);
} catch (err) {
  console.log(err);
}
```

### (5) Schedule Message:

```javascript
try {
  const data = await hubtelSms.scheduleMessage({
    Content: "Hey, There",
    From: "ME",
    To: "+23357XXXXXXX",
    Time: "2019-03-19T10:34:53.892Z"
  });
  console.log(data);
} catch (err) {
  console.log(err);
}
```

### (6) Reschedule Scheduled Message:

```javascript
try {
  const data = await hubtelSms.rescheduleScheduledMessage(
    "c122b8c0-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "2019-03-19T11:30:53.892Z"
  );
  console.log(data);
} catch (err) {
  console.log(err);
}
```

### (6) Cancel Scheduled Message:

```javascript
try {
  const data = await hubtelSms.cancelScheduledMessage(
    "e4fbab64-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
  );
  console.log(data);
} catch (err) {
  console.log(err);
}
```
