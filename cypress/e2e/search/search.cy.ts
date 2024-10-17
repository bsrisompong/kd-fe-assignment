describe("Search Gifs", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the search bar", () => {
    cy.get('[data-testid="searchbar-input"]').should("be.visible");
  });

  it("should perform a search and display results", () => {
    const searchTerm = "house stark";

    cy.intercept("GET", "https://api.giphy.com/v1/gifs/trending?**").as("trendingGifs");
    cy.reload();
    cy.wait("@trendingGifs");
    cy.get('[data-testid="searchbar-input"]').type(`${searchTerm}{enter}`);
    cy.intercept("GET", "https://api.giphy.com/v1/gifs/search?**").as("searchGifs");
    cy.wait("@searchGifs");

    cy.get('[data-testid="gif-item"]').should("have.length.greaterThan", 0);
  });

  it("should load more results on scroll (infinite scroll)", () => {
    const searchTerm = "targaryen";

    cy.intercept("GET", "https://api.giphy.com/v1/gifs/trending?**").as("trendingGifs");
    cy.reload();
    cy.wait("@trendingGifs");
    cy.get('[data-testid="searchbar-input"]').type(`${searchTerm}{enter}`);
    cy.intercept("GET", "https://api.giphy.com/v1/gifs/search?**").as("searchGifs");
    cy.wait("@searchGifs");
    cy.get('[data-testid="gif-item"]').should("have.length.greaterThan", 0);
    cy.scrollTo("bottom");
    cy.intercept("GET", "https://api.giphy.com/v1/gifs/search?**").as("loadMoreGifs");
    cy.wait("@loadMoreGifs");
    cy.get('[data-testid="gif-item"]').should("have.length.at.least", 20);
  });

  it('should display "Not Found" when no results', () => {
    const searchTerm = "asdlkjasldkjaslkdj asdlkjasldkjaslkdjasdlkjasldkjaslkdj";
    cy.get('[data-testid="searchbar-input"]').type(`${searchTerm}{enter}`);
    cy.contains("No results found").should("be.visible");
  });
});
