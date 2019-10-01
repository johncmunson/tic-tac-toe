describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})

describe('Tic Tac Toe', function() {
  beforeEach(function () {
    cy.visit('/')
  })
  it('plays a game, and X wins', function() {
    cy.get('[data-cy=game-status]').contains('Next player: X')
    cy.get('[data-cy=0]').click().contains('X')
    cy.get('[data-cy=game-status]').contains('Next player: O')
    cy.get('[data-cy=2]').click().contains('O')
    cy.get('[data-cy=game-status]').contains('Next player: X')
    cy.get('[data-cy=4]').click().contains('X')
    cy.get('[data-cy=game-status]').contains('Next player: O')
    cy.get('[data-cy=6]').click().contains('O')
    cy.get('[data-cy=game-status]').contains('Next player: X')
    cy.get('[data-cy=8]').click().contains('X')
    cy.get('[data-cy=game-status]').contains('Winner: X')
  })
  it('plays a game, and O wins', function() {
    cy.get('[data-cy=game-status]').contains('Next player: X')
    cy.get('[data-cy=0]').click().contains('X')
    cy.get('[data-cy=game-status]').contains('Next player: O')
    cy.get('[data-cy=2]').click().contains('O')
    cy.get('[data-cy=game-status]').contains('Next player: X')
    cy.get('[data-cy=5]').click().contains('X')
    cy.get('[data-cy=game-status]').contains('Next player: O')
    cy.get('[data-cy=6]').click().contains('O')
    cy.get('[data-cy=game-status]').contains('Next player: X')
    cy.get('[data-cy=8]').click().contains('X')
    cy.get('[data-cy=game-status]').contains('Next player: O')
    cy.get('[data-cy=4]').click().contains('O')
    cy.get('[data-cy=game-status]').contains('Winner: O')
  })
  it('plays a game, and it\'s a draw', function() {
    cy.get('[data-cy=game-status]').contains('Next player: X')
    cy.get('[data-cy=0]').click().contains('X')
    cy.get('[data-cy=game-status]').contains('Next player: O')
    cy.get('[data-cy=2]').click().contains('O')
    cy.get('[data-cy=game-status]').contains('Next player: X')
    cy.get('[data-cy=5]').click().contains('X')
    cy.get('[data-cy=game-status]').contains('Next player: O')
    cy.get('[data-cy=1]').click().contains('O')
    cy.get('[data-cy=game-status]').contains('Next player: X')
    cy.get('[data-cy=7]').click().contains('X')
    cy.get('[data-cy=game-status]').contains('Next player: O')
    cy.get('[data-cy=3]').click().contains('O')
    cy.get('[data-cy=game-status]').contains('Next player: X')
    cy.get('[data-cy=6]').click().contains('X')
    cy.get('[data-cy=game-status]').contains('Next player: O')
    cy.get('[data-cy=8]').click().contains('O')
    cy.get('[data-cy=game-status]').contains('Next player: X')
    cy.get('[data-cy=4]').click().contains('X')
    cy.get('[data-cy=game-status]').contains('Draw!')
  })
})
