describe('User happy path homepage', () => {
  it('Visits home page and press show deck button', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.queryByLabelText(/show deck/i).click();
  });
});
