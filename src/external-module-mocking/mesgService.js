const db = require('./common');
const stub = require('./st.module');
module.exports = {
  //Promise테스트
  sendEmail(email, message) {
    console.log(`email=>${email},message=>${message}`);
    return new Promise(resolve => {
      resolve(`returned email=>${email},message=>${message}`);
    })

  },

  //Promise테스트
  sendSMS(phone, message) {
    console.log(`phone=>${phone},message=>${message}`);
    return new Promise(resolve => {
      resolve(`returned phone=>${phone},message=>${message}`);
    })
  },

  
  sendPost() {
    stub.test_stub(1).then(input=>{
      return input;

    })
   

  }
  
};
