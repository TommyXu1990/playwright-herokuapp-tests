# 🔐 Playwright Login Demo

This is a simple login automation test built using [Microsoft Playwright](https://playwright.dev/).  
It simulates logging in to the test site: [`https://the-internet.herokuapp.com/login`](https://the-internet.herokuapp.com/login).

✅ **Tested Flow:**
- Open login page
- Enter valid username and password
- Verify successful login
- Confirm logout button appears
- Click logout
- Confirm successful logout message

---

📂 Folder Structure

```
playwright-login-demo/
│
├── tests/ # Contains login.spec.js
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

---

🚀 How to Run This Test Locally

> 🛠️ This requires [Node.js](https://nodejs.org) and [Playwright](https://playwright.dev/) to be installed.

1. Clone the Repository
```
bash
git clone https://github.com/TommyXu1990/playwright-login-demo.git
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

Simulate real-world login and logout flows

---

📬 Contact
Feel free to reach out if you have questions or feedback:

Tommy Xu
Email: [Tommy.xu90@gmail.com]
GitHub: TommyXu1990


