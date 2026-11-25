Feature: Ecommerce2 Validation
 @validation
   Scenario Outline: Placing the order
    Given A login with Ecommerce2 Application with "<userName>" and "<passWord>"
    Then Verify error message is displayed


    Examples:
      | userName           | passWord       |
      | rahulshettyacademy | Learning@830$3mK2 |
      | Hello@123          | Test123        |   