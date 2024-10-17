describe("Infinite Scroll", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.giphy.com/v1/gifs/trending?**").as("trendingGifs");
    cy.visit("http://localhost:3000");
  });

  it("should load trending gifs and perform infinite scroll", () => {
    cy.wait("@trendingGifs");
    cy.get('[data-testid="gif-item"]').should("have.length.greaterThan", 0);

    const performInfiniteScroll = (expectedCount: number) => {
      cy.scrollTo("bottom");
      cy.wait("@trendingGifs");
      cy.get('[data-testid="gif-item"]').should("have.length.at.least", expectedCount);
    };

    performInfiniteScroll(20);
    performInfiniteScroll(40);
  });
});
