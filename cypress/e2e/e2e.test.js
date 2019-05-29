describe('User happy path homepage', () => {
  it('Visits home page and press show deck button', () => {
    cy.visit('/')
      .getByLabelText(/show deck/i)
      .click();
  });
});
