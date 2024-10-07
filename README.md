## Invoicing App


## Overview
This is a simple invoicing application designed based on the provided Figma design. It includes user authentication (using Firebase), a mock backend, real-time data flow, unit and integration tests for key components, and responsive UI across devices.

## Features
- User Authentication: Sign up and login with Firebase authentication.
- Mock Backend: Simulates API calls for handling invoices using a mock server.
- Real-time Data Flow: Utilizes WebSockets for real-time updates.
- Responsive Design: Ensures usability on mobile and desktop devices.
- Testing: Includes unit and integration tests for key components.
- Error Handling: Handles invalid URLs, network issues, and other potential errors.
- Loading State Feedback: Displays loading spinners and user feedback during invoice loading.

## Tech Stack
- Frontend: Next.js for building a modern React-based application.
- Styling: Tailwind CSS for utility-first CSS styling.
- Authentication: Firebase for managing user authentication.
- Real-Time: WebSocket for real-time updates.
- Testing: Jest and React Testing Library for unit and integration tests.
- Mock API: json-server for simulating a backend.

## Getting Started
First, run the development server:

```bash
Instructions:

- Clone the repository: 
            git clone https://github.com/muideenjamiu01/yv-test-assessment.git
- Install dependencies:
                 npm install
- Run the app:
             npm run dev
- Backend API: 
        Run mock server: npx json-server --watch db.json --port 4000

- Open the app at: 
                http://localhost:3000

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## To Run the mock backend
 - npx json-server --watch db.json --port 4000


 ### Frontend Test Url
- https://yv-test-assessment-lk53.vercel.app/

### Frontend Live Url
- https://yv-test-assessment-lk53.vercel.app/

### Deployment
- This project is deployed on Vercel
- Live branch - main
- Test branch - development

