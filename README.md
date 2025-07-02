# Travel Agency Demo

A basic website built with Vite, React, React Router, and Vitest for testing.

## Features

- **Vite**: Fast build tool and development server
- **React**: Modern UI library for building user interfaces
- **React Router**: Client-side routing for single-page application navigation
- **Vitest**: Fast unit testing framework with built-in support

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Visit http://localhost:5173 to view the application.

### Testing

Run tests:
```bash
npm run test
```

Run tests once (CI mode):
```bash
npm run test:run
```

### Building

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # About page
│   └── Contact.jsx     # Contact page
├── test/               # Test configuration
│   └── setup.js        # Test setup file
├── App.jsx             # Main application component
├── App.css             # Application styles
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## Available Routes

- `/` - Home page with destination highlights
- `/about` - About the travel agency
- `/contact` - Contact information and form