/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/endereço.page'
const perfil = require('../fixtures/perfil.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.CadProdutos(4)
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.woocommerce-info > .showlogin').click()
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-button').click()
        EnderecoPage.editarEnderecoFaturamento('Fernanda', 'Petry', 'DCA', 'Brasil', 'Rua Ignez Boff Masotti', '1313', 'Caxias do Sul', 'Rio Grande do Sul', '54678974', '67943990673', 'fefe@teste.com')
        cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido')
    });


})