## Acceptance Criteria Specification MyBeats

![alt text](https://github.com/TheNightviz/MyBeats/blob/master/Acceptance.png "Acceptance")


Feature: Registration
As a music lover I want to be able to register myself so I can see my music data
Scenario: Registering with a pre-existing email
Given I provide a used email and password
When I access the registration page of the website
Then I should see an message stating that the account already exists
And I should see the registration button grey out

Scenario: Registering with mismatched passwords
Given I provide a valid email and incorrect password verification
When I access the registration page of the website
Then I should see an message stating that the passwords do not match
And I should see the registration button grey out
And I should see the passwords field reset

Scenario: Registration with a valid email and password combination
Given I provide an unused email and matching passwords
When I access the registration page of the website
Then I should see the registration button light up
And I should see the Overview page 


Feature: Login/Logout
As a user of myBeats, I want to login and logout so that the platform remembers me.
Scenario: Login
Given I am not logged in as a user
When I click “Login”
Then I should be able to enter my valid username and password
And I should see my OverView of music data page.



Scenario: Logout
Given I am logged in as a user
When I click “Logout”
Then I should be able to exit my OverView
And I should see the Home Page. 


Feature: Charting
As a user of myBeats, I want to be able to see detailed information about my music data in a user friendly format and be able share my data.

Scenario: 
Given I am logged in as a user and connected to spotify
When I click on the “My Data” page
Then I should be able to see charts with my favorite artists data
And Interact with the data

Scenario: Charting favorite genres
Given I am logged in as a user and connected to spotify
When I click on the “My Data” page
Then I should be able to see charts with my favorite genre data
And Interact with the data

Scenario: Charting listening time
Given I am logged in as a user and connected to spotify
When I click on the “My Data” page
Then I should be able to see a chart with my listening data
And Interact with the data

Scenario: Share music data with friends 
Given I am logged in as a user and connected to spotify
When I click on the “My Data” page
Then I should be able to see charts with my music data
And Click on a button to share my music data.