Scenario: Placing an Order
  Given I have my chosen items in my shopping cart
  When I proceed to checkout and enter my payment information
  Then I receive an order confirmation