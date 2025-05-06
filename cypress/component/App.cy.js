import React from 'react'
import App from '../../src/App'

describe('App Component', () => {
  beforeEach(() => {
    cy.mount(<App />)
  })

  it('renders without crashing', () => {
    cy.get('div').should('exist')
  })

  it('displays the correct header content', () => {
    cy.get('h1').should('contain', 'GitHub Actions CI/CD Demo')
  })

  it('displays the correct description', () => {
    cy.get('p').should('contain', 'This is a demonstration of CI/CD pipeline using GitHub Actions')
  })

  it('has the correct CSS classes', () => {
    cy.get('div').should('have.class', 'App')
    cy.get('header').should('have.class', 'App-header')
  })

  it('has the correct structure', () => {
    cy.get('.App').within(() => {
      cy.get('header').should('exist')
      cy.get('h1').should('exist')
      cy.get('p').should('exist')
    })
  })
}) 