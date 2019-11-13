const axios = require("axios");
const mesgService = require('./mesgService');
const userService = require('./userService');

jest.mock('./mesgService')

test("findOne fetches data from the API endpoint and returns what axios get returns", async () => {

  mesgService.sendSMS.mockClear();
  mesgService.sendSMS.mockResolvedValue('hahaha');
  const user = {
    email:'test@email.com',
    phone:'010-3423-2342'
  };
  userService.findSMS(user);
  expect(mesgService.sendSMS).toBeCalledTimes(1);
  expect(mesgService.sendSMS).toBeCalledWith(user.phone,'nice');
  


});
