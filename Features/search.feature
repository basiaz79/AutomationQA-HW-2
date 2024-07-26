Scenario: Product Search
  Given I am on the retail store website page
  When I enter a product name into the search bar and click a search button
  Then I should see a list of products that match my search