// cypress/e2e/favorites.cy.ts

describe("Favorites Functionality", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "https://api.giphy.com/v1/gifs/search?**").as("searchGifs");
  });

  it("should add a GIF to favorites and display it in the Favorites Page", () => {
    const searchTerm = "12312";

    cy.get('[data-testid="searchbar-input"]').clear().type(`${searchTerm}{enter}`);
    cy.wait("@searchGifs");
    cy.get('[data-testid="gif-item"]').should("have.length.greaterThan", 0);
    cy.scrollTo("top");
    cy.get('[data-testid="gif-item"]')
      .first()
      .realHover()
      .trigger("mouseover")
      .within(() => {
        cy.get('[data-testid="favorite-button"]').should("be.visible");
        cy.get('[data-testid="favorite-button"]').click();
      });

    cy.visit("http://localhost:3000/favorites");

    cy.get('[data-testid="gif-item"]').should("have.length.greaterThan", 0);
    cy.get('[data-testid="gif-item"]')
      .first()
      .realHover()
      .trigger("mouseover")
      .within(() => {
        cy.get('[data-testid="favorite-button"]').should("be.visible");
        cy.get('[data-testid="favorite-button"]').click();
      });

    cy.contains("No Favorites").should("be.visible");
  });
});
