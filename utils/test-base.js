const base = require('@playwright/test')

 exports.TestData = base.test.extend(
    {
       testDataForOrder:   {
        userName: "infantom.sabadotechnologies@gmail.com",
        passWord: "Hello@123",
        productName: "iphone 13 pro"
        }
    }
)