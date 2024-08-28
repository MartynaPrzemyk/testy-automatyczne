/// <reference types="cypress" />

describe("Mój pierwszy test automatyczny", () => {
    it("Otworzenie strony https://relocer.com/", () => {
        cy.visit("https://relocer.com/");
    })
})