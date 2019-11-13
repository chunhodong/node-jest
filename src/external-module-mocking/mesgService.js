
module.exports = {
  sendEmail(email, message) {
    console.log(`email=>${email},message=>${message}`);
    return new Promise(resolve => {
      resolve(`returned email=>${email},message=>${message}`);
    })

  },

  sendSMS(phone, message) {
    console.log(`phone=>${phone},message=>${message}`);
    return new Promise(resolve => {
      resolve(`returned phone=>${phone},message=>${message}`);
    })


  }
};
