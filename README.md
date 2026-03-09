# Dog API - React + Express + TypeScript

A full-stack application that fetches random dog images from the Dog CEO API. Built with React (frontend) and Express (backend) using TypeScript.

## 🎯 Features

- **React Frontend** - Interactive UI with smooth animations
- **Express Backend** - RESTful API with service layer pattern
- **TypeScript** - Fully typed for development safety
- **Environment Configuration** - Configurable backend URL via .env files
- **Error Handling** - Comprehensive error handling at all layers
- **CORS Enabled** - Ready for cross-origin requests
- **Service Layer Pattern** - Clean functional architecture (no OOP)

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

Verify installation:
```bash
node --version
npm --version
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd dogapi
```

#### (Optional) Remove Git History

If you want to use this template for your own project without the original git history:

**Using File Explorer (Easiest):**
1. Open the project folder in File Explorer
2. Enable "Show hidden files" (View → Show → Hidden items)
3. Find and delete the `.git` folder

**Using Command Line:**

Windows (PowerShell):
```powershell
Remove-Item -Recurse -Force .git
```

Windows (Command Prompt):
```cmd
rmdir /s /q .git
```

macOS/Linux:
```bash
rm -rf .git
```

After removing the `.git` folder, you can initialize a new repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Install Dependencies

Install backend dependencies:
```bash
cd server
npm install
cd ..
```

Install frontend dependencies:
```bash
npm install
```

### 3. Start the Backend Server

Open a terminal in the `server` directory:
```bash
cd server
npm run dev
```

Expected output:
```
Server is running on http://localhost:5000
Dog API endpoint: http://localhost:5000/api/dogs/random
```

### 4. Start the Frontend Application

Open a new terminal in the project root:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📁 Project Structure

```
dogapi/
├── server/                          # Backend (Express + TypeScript)
│   ├── index.ts                    # Main server file
│   ├── package.json                # Backend dependencies
│   ├── tsconfig.json               # TypeScript config
│   ├── .env                        # Environment variables
│   ├── .env.example                # Example env file
│   ├── services/
│   │   └── dogService.ts          # API call logic
│   ├── controllers/
│   │   └── dogController.ts       # Request handlers
│   ├── routes/
│   │   └── dogRoutes.ts           # API routes
│   ├── node_modules/               # Installed packages
│   └── test.rest                   # REST client tests
│
├── src/                            # Frontend (React + TypeScript)
│   ├── App.tsx                    # Main App component
│   ├── App.css                    # Styling
│   ├── main.tsx                   # React entry point
│   └── index.css                  # Global styles
│
├── .env                           # Frontend environment
├── .env.example                   # Frontend env example
├── package.json                   # Frontend dependencies
├── vite.config.ts                 # Vite config
└── README.md                      # This file
```

## 🔧 Configuration

### Backend Environment Variables

Edit `server/.env`:
```
DOG_API_URL=https://dog.ceo/api/breeds/image/random
PORT=5000
```

### Frontend Environment Variables

Edit `.env`:
```
VITE_BACKEND_URL=http://localhost:5000
```

For production, use `.env.production`:
```
VITE_BACKEND_URL=https://your-production-backend.com
```

## 🌐 API Endpoints

### Health Check
```
GET http://localhost:5000/api/health
```

Response:
```json
{
  "status": "Server is running"
}
```

### Get Random Dog Image
```
GET http://localhost:5000/api/dogs/random
```

Response:
```json
{
  "success": true,
  "data": {
    "imageUrl": "https://images.dog.ceo/breeds/...",
    "status": "success"
  }
}
```

## 🧪 Testing with REST Client

Install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension in VS Code.

Open `server/test.rest` and click "Send Request" buttons to test endpoints.

## 📚 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start with watch mode (auto-reload)
- `npm run start` - Run production build
- `npm run build` - Compile TypeScript

### Testing (Playwright)
- `npm run test:all` - Run all tests (API + E2E)
- `npm run test:api` - Run only API tests
- `npm run test:e2e` - Run only E2E tests
- `npm run test:headed` - Run tests in browser (visible)
- `npm run test:headed:slow` - Run tests one by one in browser (sequential)
- `npm run test:debug` - Debug tests with inspector (step-by-step, slow motion)
- `npm run test:open-report` - Open HTML test report
- `npm run test:report` - Serve test report on localhost

## 🧪 Running Tests

This project includes **5 Playwright tests** (2 API tests + 3 E2E tests).

### Prerequisites

**Both servers must be running before tests can execute:**

#### Step 1: Start Backend Server
Open Terminal 1:
```bash
cd server
npm start
```

Expected output:
```
Server is running on http://localhost:5000
```
**Keep this terminal open!**

#### Step 2: Start Frontend Server
Open Terminal 2 (new window):
```bash
npm run dev
```

Expected output:
```
Local: http://localhost:5173/
```
**Keep this terminal open!**

### Running Tests

Open Terminal 3 (new window) and run any of the following:

#### Run All Tests (Recommended)
```bash
npm run test:all
```

Output:
```
Running 5 tests using 5 workers
  5 passed (4.4s)
```

#### Run Tests in Slow Motion (Watch Them Execute)

**Option 1: Debug Mode (Recommended - Slow & Interactive)**
```bash
npm run test:debug
```
- Opens Playwright Inspector
- **Step through each test** one action at a time
- Perfect for learning and debugging
- Press "Step over" button to advance

**Option 2: Headed Slow Mode (Watch Without Stopping)**
```bash
npm run test:headed:slow
```
- Runs tests one by one (sequential)
- Browser stays open
- Stops at first failure
- Good for watching execution flow

#### Run Specific Test Suites
```bash
# API tests only (Tests 1 & 2)
npm run test:api

# E2E tests only (Tests 3, 4 & 5)
npm run test:e2e
```

#### View Test Results
```bash
# Open HTML report in browser
npm run test:open-report
```

### Test Coverage

**API Tests** (2 tests):
- ✅ Test 1: Positive - Get random dog image
- ✅ Test 2: Negative - Invalid route handling

**E2E Tests** (3 tests):
- ✅ Test 3: Positive - Dog image loads on page load
- ✅ Test 4: Positive - Dog image loads on button click
- ✅ Test 5: Negative - Error message on API failure

### Troubleshooting Tests

#### Error: "ERR_CONNECTION_REFUSED at http://localhost:5000"
**Fix:** Backend server is not running. Start it with:
```bash
cd server
npm start
```

#### Error: "ERR_CONNECTION_REFUSED at http://localhost:5173"
**Fix:** Frontend server is not running. Start it with:
```bash
npm run dev
```

#### Error: "EADDRINUSE: address already in use :::5000"
**Fix:** Port 5000 is already in use. Kill the process:

Windows PowerShell:
```powershell
$port = Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty OwningProcess
if ($port) { Stop-Process -Id $port -Force }
```

Then restart the server:
```bash
cd server
npm start
```

#### Error: "EADDRINUSE: address already in use :::5173"
**Fix:** Port 5173 is already in use. Kill the process:

Windows PowerShell:
```powershell
$port = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty OwningProcess
if ($port) { Stop-Process -Id $port -Force }
```

Then restart the frontend:
```bash
npm run dev
```

## 🐛 Troubleshooting

### "Cannot find module 'express'" or other package errors
Solution: Make sure you've run `npm install` in both the root and `server` directories.

```bash
npm install           # In root directory
cd server
npm install          # In server directory
```

### Backend port already in use
Change the PORT in `server/.env`:
```
PORT=3001
```

Then update frontend `.env`:
```
VITE_BACKEND_URL=http://localhost:3001
```

### CORS errors
Ensure the backend is running and `VITE_BACKEND_URL` in `.env` matches the backend address.

### Images not loading
1. Check that both frontend and backend are running
2. Open browser DevTools (F12) → Network tab
3. Check API response status code

## 🏗️ Architecture

### Service Layer Pattern

The backend uses a **functional service layer pattern** (no classes):

1. **Routes** (`routes/`) - Define API endpoints
2. **Controllers** (`controllers/`) - Handle HTTP requests/responses
3. **Services** (`services/`) - Business logic and API calls

```
HTTP Request → Route → Controller → Service → Response
```

## 📦 Technologies Used

- **Frontend**: React 19, TypeScript, Vite, CSS3
- **Backend**: Express.js, TypeScript, Node.js
- **Tools**: TSX, ESLint, CORS
- **External API**: Dog CEO API

## 🚀 Deployment

### Backend (Express)
1. Build: `cd server && npm run build`
2. Deploy to Heroku, Render, or any Node.js hosting
3. Set environment variables in hosting platform
4. Start with: `npm run start`

### Frontend (React)
1. Build: `npm run build`
2. Deploy to Vercel, Netlify, or GitHub Pages
3. Set `VITE_BACKEND_URL` to production backend URL
4. Build for production: `npm run build`

## 📝 Learning Objectives

This project demonstrates:
- ✅ React hooks (useState, useEffect)
- ✅ TypeScript interfaces and types
- ✅ Express server setup
- ✅ RESTful API design
- ✅ Service layer architecture
- ✅ Error handling patterns
- ✅ Environment configuration
- ✅ CORS in web applications
- ✅ Async/await patterns
- ✅ CSS animations

## 🤝 Contributing

Students are encouraged to:
- Add new features
- Improve error handling
- Enhance UI/UX
- Add unit tests
- Optimize performance

## 📞 Support

If you encounter issues:
1. Check the Troubleshooting section
2. Verify all prerequisites are installed
3. Check terminal output for error messages
4. Review browser console for client-side errors

## 📄 License

MIT License - Feel free to use this for learning purposes.

---

**Happy Learning! 🐕**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
