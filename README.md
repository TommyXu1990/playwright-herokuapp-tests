# 🔐 Playwright Login Demo

This project contains UI automation tests using [Playwright](https://playwright.dev/) on [the-internet.herokuapp.com](https://the-internet.herokuapp.com/), a popular web UI testing playground.

✅ Tested Cases

🔐 Login
- Open login page
- Enter valid username and password
- Verify successful login
- Click logout
- Confirm successful logout message


☑️ Checkboxes
- Toggle checkbox states
- Verify expected behavior using assertions

🔄 Dynamic Controls
- Wait for input field to be enabled/disabled
- Demonstrates use of explicit waits and state validation
---

📂 Folder Structure

```
playwright-login-demo/
│
├── tests/
│   ├── login.spec.ts
│   ├── checkboxes.spec.ts
│   └── dynamic-controls.spec.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

---

🚀 How to Run This Test Locally

> 🛠️ This requires [Node.js](https://nodejs.org) and [Playwright](https://playwright.dev/) to be installed.
    [Watch Video and follow along :)](https://www.loom.com/share/f367ea1f62ea48329627b86539c84b7d?sid=0706a85a-3e61-4791-b752-083b69ebff9e)

1. Clone the Repository
```
bash
git clone https://github.com/TommyXu1990/playwright-herokuapp-tests.git
cd playwright-login-demo
```

2. Install Dependencies
```
bash
npm install
```

3. Install Playwright Browsers
```
bash
npx playwright install
```

Run the Test (with browser visible)
```
bash
npx playwright test --headed
```

---

⚙️ Tech Stack
Node.js

Playwright

JavaScript (ES Modules)

VS Code

---

🎥 Setup Help (Optional Videos)
Want to follow along with setup? These step-by-step videos will guide you:

[Watch Node.js installation](https://komododecks.com/recordings/RD35WG7HTNVV8HIiV32a?onlyRecording=1) of [Node.js](https://nodejs.org)

[Watch VS Code installation](https://www.loom.com/share/4ddcecfd0b6140d7866ad0280d8783c5) of [VS Code](https://code.visualstudio.com/Download)

Install & Run [Playwright](https://playwright.dev/)

💡 These are optional. Only use them if you're new to these tools.

---

🧠 Why This Project?
I built this project as part of my QA Automation portfolio. My goal was to:

Practice Playwright fundamentals

Learn best practices for writing, refactoring, and verifying end-to-end tests

Automated real-world UI tests for login, checkboxes, and dynamic controls using Playwright.

---

📬 Contact
Feel free to reach out if you have questions or feedback:

Tommy Xu
Email: [Tommy.xu90@gmail.com]
GitHub: TommyXu1990


