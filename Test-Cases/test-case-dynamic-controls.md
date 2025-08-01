✅ Test Case: Dynamic Controls Automation Test

## Objective
To verify the behavior of dynamic checkbox and input field elements at Herokuapp - Dynamic Controls.

## Steps

📦 Checkbox Section
1. Navigate to https://the-internet.herokuapp.com/dynamic_controls
2. Verify the checkbox is visible
3. Verify the checkbox is not checked
4. Click the checkbox to check it
5. Click the "Remove" button
6. Verify the checkbox disappears and message "It's gone!" appears
7. Click the "Add" button
8. Verify the checkbox reappears and message "A checkbox" appears

✏️ Input Field Section
9. Verify the text input field is disabled
10. Click the "Enable" button
11. Verify the message "It's enabled!" appears
12. Type "Hello!" into the input field
13. Verify the input field contains the text "Hello!"
14. Click the "Disable" button
15. Verify the message "It's disabled!" appears
16. Verify the input field is disabled again

## Expected Result
- Checkbox can be added, removed, and interacted with as expected.
- Text input field properly toggles between enabled/disabled states.
- Success messages are displayed after each action.

📁 File: 'tests/dynamic-controls.spec.js'