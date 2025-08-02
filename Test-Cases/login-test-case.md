 ✅ Test Case: Login Automation Test

## Objective
To verify that a user can successfully log in and log out using valid credentials at [Herokuapp - login](https://the-internet.herokuapp.com/login).

## Steps
1. Navigate to https://the-internet.herokuapp.com/login
2. Enter username: `tomsmith`
3. Enter password: `SuperSecretPassword!`
4. Click the "Login" button
5. Verify welcome message appears
6. Click "Logout"
7. Verify logout confirmation

## Expected Result
- Login page loads successfully with username and password fields visible.
- User can enter valid credentials (tomsmith / SuperSecretPassword!).
- Upon clicking Login, the secure area is displayed with a welcome message.
- After clicking Logout, the user is redirected to the login page with a logout confirmation banner.

📁 File: `tests/login.spec.js`


