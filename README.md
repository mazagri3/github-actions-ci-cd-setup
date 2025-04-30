# GitHub Actions CI/CD Setup

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

This project demonstrates the implementation of a Continuous Integration (CI) and Continuous Deployment (CD) pipeline using GitHub Actions. The pipeline is configured to:
- Run Cypress component tests when a Pull Request is made to the develop branch
- Automatically deploy the application to Render when code is merged from develop to main

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [CI/CD Pipeline](#cicd-pipeline)
- [Contributing](#contributing)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)

## Features

- Automated testing with Cypress
- Continuous Integration with GitHub Actions
- Automated deployment to Render
- Branch protection and workflow automation

## Technologies Used

- GitHub Actions
- Cypress
- Render
- Node.js
- React

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a develop branch
4. Configure GitHub repository secrets
5. Set up Render deployment

## CI/CD Pipeline

The project implements two main workflows:

1. **Test Workflow**
   - Triggers on PR to develop branch
   - Runs Cypress component tests
   - Reports test results

2. **Deploy Workflow**
   - Triggers on merge to main branch
   - Automatically deploys to Render
   - Updates production environment

## Contributing

Contributions are welcome. Please submit a pull request or open an issue for any feature requests or bugs.

## Questions

For any questions, please contact me on GitHub at [mazagri3](https://github.com/mazagri3)

## Credits

Created by: Obi Mazagri

This project was created as part of a coding bootcamp assignment. Special thanks to:
- ChatGPT for assistance
- Bootcamp instructors and tutors
- GitHub Actions documentation
- Render documentation

## License

This project is licensed under the MIT License - see the LICENSE file for details. 