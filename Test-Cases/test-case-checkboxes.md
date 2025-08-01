## 🧪 Test Case: Checkboxes

## Objective
To verify that both checkboxes on the page can be selected and deselected as expected at [Herokuapp - Checkboxes](https://the-internet.herokuapp.com/checkboxes).

## Steps
1. Navigate to https://the-internet.herokuapp.com/checkboxes
2. Verify the first checkbox is unchecked
3. Verify the second checkbox is checked
4. Click to check the first checkbox
5. Verify the first checkbox is now checked
6. Click to uncheck the second checkbox
7. Verify the second checkbox is now unchecked

### Expected Result
- The page loads successfully with two checkboxes.
- The first checkbox is initially unchecked and the second is checked.
- After user interaction, the state of both checkboxes correctly reflects user actions.

📁 File: `tests/checkboxes.spec.js`