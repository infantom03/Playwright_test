Feature: Ecommerce Validation
@Regression
  Scenario: Placing the order
    Given A login with Ecommerce Application with "infantom.sabadotechnologies@gmail.com" and "Hello@123"
    When  Add "iphone 13 pro" to Cart
    Then  Verify "iphone 13 pro" is displayed in the Cart
    When Enter valid details and place the order
    Then Verify order is precent in OrderHistory