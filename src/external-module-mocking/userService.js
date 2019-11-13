const messageService = require("./mesgService");


module.exports = {
  async findEmail (user) {
    const messgae = 'hi';
    const value = await messageService.sendEmail(user.email,messgae);
    console.log('service email value =>',value);
    
  },

  async findSMS(user) {
    const messgae = 'nice';
    const value = await messageService.sendSMS(user.phone,messgae);
    console.log('service sms value =>',value);

  }
};
