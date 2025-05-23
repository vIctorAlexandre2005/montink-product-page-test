describe("Consulta de CEP", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("mostra o endereço corretamente para um CEP válido", () => {
    // Intercepta a chamada da API ViaCEP com resposta mockada
    cy.intercept("GET", "https://viacep.com.br/ws/01001000/json/", {
      statusCode: 200,
      body: {
        cep: "01001-000",
        logradouro: "Praça da Sé",
        complemento: "lado ímpar",
        bairro: "Sé",
        localidade: "São Paulo",
        uf: "SP",
      },
    }).as("cepValido");

    // Digita o CEP completo de uma vez
    cy.get("input[placeholder='Ex: 00000-000']").type("01001000");

    // Aguarda a requisição ser feita
    cy.wait("@cepValido");

    // Verifica se os dados renderizaram corretamente
    cy.contains("Frete grátis").should("be.visible");
    cy.contains("Sé, São Paulo - SP").should("be.visible");

    // Verifica se os dados foram salvos no localStorage
    cy.window().then((win) => {
      const storage = win.localStorage.getItem("cepData");
      expect(storage).to.exist;
    });
  });

  it("mostra erro para um CEP inválido", () => {
    cy.intercept("GET", "https://viacep.com.br/ws/00000000/json/", {
      statusCode: 200,
      body: {
        erro: true,
      },
    }).as("cepInvalido");

    cy.get("input[placeholder='Ex: 00000-000']").type("00000000");

    cy.wait("@cepInvalido");

    cy.contains("Não foi possível encontrar a localização").should(
      "be.visible"
    );
  });
});
