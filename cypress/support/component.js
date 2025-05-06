import { mount } from 'cypress/react18'
import './commands'

// Import your app's CSS
import '../../src/App.css'

Cypress.Commands.add('mount', mount)

// Example: Import global styles here
// import '../../src/index.css' 