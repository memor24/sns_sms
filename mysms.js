//sudo yum install npm -y
//sudo npm install aws-sdk

//#!/usr/bin/node (for linux)

//import aws-sdk module
const AWS = require('aws-sdk'); 

//aws config (update region)
AWS.config.update({
  //unless authenticated: ssh -i "keypair.pem" user@publicDNS
  //accessKeyId: '', 
  //secretAccessKey: '',
  region: 'us-east-1' 
}); 

//define sns client using the function
const sns = new AWS.SNS();

const phoneNumber = '15555555555';

const params = {
  Message: 'text message!',
  PhoneNumber: phoneNumber
};

//send the message using the publish method
sns.publish(params, (err, data) => {
  if (err) {
    console.log('Error sending message:', err);
  } else {
    console.log('Message sent successfully:', data);
  }
});
