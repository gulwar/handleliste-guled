// Import React and ReactDOM for rendering
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import main App component
import App from './App.jsx'

// Import global styles
import './index.css'

// Render the App component into the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)